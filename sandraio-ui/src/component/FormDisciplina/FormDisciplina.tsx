import react, { ReactElement, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import CustomButton from "../Button/Button";
import { toast } from "react-toastify";
import { createDisciplinas } from "../../services/disciplinaService";

interface FormDisciplinaProps {
  className?: string;
  teste?: boolean;
}

const FormDisciplina = (props: FormDisciplinaProps): ReactElement => {
  const [inputValueName, setInputValueName] = useState<string>("");
  const [inputValueHora, setInputValueHora] = useState<string>("");
  const [inputValueAula, setInputValueAula] = useState<string>("");
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleNome = (nome: string) => {
    setInputValueName(nome);
  };

  const handleAula = (aula: string) => {
    setInputValueAula(aula);
  };

  const handleHora = (hora: string) => {
    setInputValueHora(hora);
  };

  async function sendDisciplina() {
    if(!inputValueName || !inputValueHora || !inputValueAula) {
      toast.error("Ops, informe os dados corretamente.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return
    }
    const { status, data } = await createDisciplinas({
      nome: inputValueName,
      hora_aula: inputValueHora,
      aulas_totais: Number(inputValueAula)
    });
  
    toast.success("Parabéns, disciplina cadastrada!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  
    if (status !== 200) {
      throw new Error();
    }
   }
  
  

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
        <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor, informe o nome!' }]}>
          <Input size="large" className="h-max" placeholder="Ex: 12000604" onChange={(e) => handleNome(e.target.value)} />
        </Form.Item>
        <Form.Item label="Aulas totais" name="aulas" rules={[{ required: true, message: 'Por favor, informe as aulas totais!' }]}>
          <Input size="large" className="h-max" placeholder="Ex: 2" onChange={(e) => handleAula(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Valor hora aula" name="hora" rules={[{ required: true, message: 'Por favor, informe o valor hora aula!' }]}>
          <Input size="large" className="h-max" placeholder="Ex: 50,00" onChange={(e) => handleHora(e.target.value)} />
        </Form.Item>

        <div className="flex justify-end">
        <Form.Item>
          <CustomButton  onClick={() => sendDisciplina()}/>
        </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FormDisciplina;
