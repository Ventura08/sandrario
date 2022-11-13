import react, { ReactElement, useCallback, useEffect, useState } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import CustomButton from "../Button/Button";
import { DisciplinaInterface } from "../../interfaces/disciplinaInterface";
import { getAllDisciplinas } from "../../services/disciplinaService";

interface FormProfessorProps {
  className?: string;
  teste?: boolean;
}

const FormProfessor = (props: FormProfessorProps): ReactElement => {
  const [form] = Form.useForm();
  const [disciplina, setDisciplina] = useState<DisciplinaInterface[]>()
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
    console.log(value)
  }

  const getDisciplinas = useCallback(async () => {
    await getAllDisciplinas().then((res) => {
      setDisciplina(res.data)
    })
  }, [])



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
        <Form.Item label="Nome" required>
          <Input size="large" className="h-max" placeholder="Ex: Wladmir" />
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
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
      </Form>
      <div className="self-end">
        <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DO ALUNO')}/>
      </div>
    </div>
  );
};

export default FormProfessor;
