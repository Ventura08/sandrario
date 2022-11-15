import react, { ReactElement, useCallback, useEffect, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import "./formTurma.css";
import CustomButton from "../Button/Button";
import { createTurmas, getAllTurmas } from "../../services/turmasService";
import { TurmasInterface } from "../../interfaces/turmaInterface";
import { toast } from 'react-toastify';

interface FormTurmaProps {
  className?: string;
  teste?: boolean;
}

const FormTurma = (props: FormTurmaProps): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  const [turma, setTurma] = useState<TurmasInterface[]>()

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

  const handleTurma = async (value: string) => {
    setInputValue2(value)
  }

  const getTurmas = useCallback(async () => {
    await getAllTurmas().then((res) => {
      setTurma(res.data)
    })
  }, [])

 async function sendTurma() {
  if(!inputValue || !inputValue2) {
    toast.error("Ops, informe os dados corretamente.", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return
  }
  const { status, data } = await createTurmas({
    nome: inputValue,
    quantidade_horarios: Number(inputValue2)
  });

  toast.success("Parabéns, turma cadastrada!", {
    position: toast.POSITION.TOP_RIGHT,
  });

  if (status !== 200) {
    throw new Error();
  }
 }

 const handleNome = (nome: string) => {
  setInputValue(nome);
  console.log(inputValue)
};


  useEffect(() => {
    getTurmas()
  }, [getTurmas])

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
        <Form.Item
        label="Nome"
        name="nome"
        rules={[{ required: true, message: 'Por favor, informe o nome!' }]}
      >
        <Input 
         size="large"
         className="h-max"
         placeholder="Ex: Mobile"
         id="senha"
         onChange={(e) => handleNome(e.target.value)}/>
      </Form.Item>
        <Form.Item label="Número de Horários" rules={[{ required: true,  message: 'Please input your horario!' }]}
        required>
        <Select
              allowClear
              showSearch
              placeholder="Selecione a quantidade de horários"
              onChange={handleTurma}
              style={{ width: '100%' }}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "1",
                },
                {
                  value: "2",
                  label: "2",
                },
                {
                  value: "3",
                  label: "3",
                },
                {
                  value: "4",
                  label: "4",
                },
                {
                  value: "5",
                  label: "5",
                },
              ]}
            >
          </Select>
        </Form.Item>
        <div className="flex justify-end">
        <Form.Item>
          <CustomButton  onClick={() => sendTurma()}/>
        </Form.Item>
        </div>
       
      </Form>

    </div>
  );
};

export default FormTurma;
