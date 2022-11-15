import react, { ReactElement, useCallback, useEffect, useState } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import CustomButton from "../Button/Button";
import { DisciplinaInterface } from "../../interfaces/disciplinaInterface";
import { getAllDisciplinas } from "../../services/disciplinaService";
import { toast } from 'react-toastify';
import { createProfessores } from "../../services/professorService";

interface FormProfessorProps {
  className?: string;
  teste?: boolean;
}

const FormProfessor = (props: FormProfessorProps): ReactElement => {
  const [form] = Form.useForm();
  const [disciplina, setDisciplina] = useState<DisciplinaInterface[]>()
  const [inputValueName, setInputValueName] = useState<string>("");
  const [inputValueDisciplina, setInputValueDisciplina] = useState<string>("");
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleDisciplina = async (value: string) => {
    setInputValueDisciplina(value)
  }

  const getDisciplinas = useCallback(async () => {
    await getAllDisciplinas().then((res) => {
      setDisciplina(res.data)
    })
  }, [])

  const handleNome = (nome: string) => {
    setInputValueName(nome);
  };

  async function sendProfessor() {
    if(!inputValueName || !inputValueDisciplina) {
      toast.error("Ops, informe os dados corretamente.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return
    }
    const { status, data } = await createProfessores({
      nome: inputValueName,
      disciplina_id: inputValueDisciplina,
    });
  
    toast.success("Parabéns, professor cadastrado!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  
    if (status !== 200) {
      throw new Error();
    }
   }

  useEffect(() => {
    getDisciplinas()
  }, [getDisciplinas])
  

  return (
    <div className="w-full h-full flex flex-col">
      <Form
        className={"w-full p-7"}
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Nome" name='nome'  rules={[{ required: true, message: 'Por favor, informe o nome!' }]}>
          <Input size="large" className="h-max" placeholder="Ex: Wladmir"
           onChange={(e) => handleNome(e.target.value)} />
        </Form.Item>
        <Form.Item label="Disciplina" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione a Disciplina"
              onChange={handleDisciplina}
              style={{ width: '100%' }}
            >
              {disciplina?.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>

          <div className="flex justify-end">
        <Form.Item>
          <CustomButton  onClick={() => sendProfessor()}/>
        </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FormProfessor;
