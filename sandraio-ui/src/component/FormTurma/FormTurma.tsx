import react, { ReactElement, useCallback, useEffect, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import "./formTurma.css";
import CustomButton from "../Button/Button";
import { getAllTurmas } from "../../services/turmasService";
import { TurmasInterface } from "../../interfaces/turmaInterface";

interface FormTurmaProps {
  className?: string;
  teste?: boolean;
}

const FormTurma = (props: FormTurmaProps): ReactElement => {

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
    console.log(value)
  }

  const getTurmas = useCallback(async () => {
    await getAllTurmas().then((res) => {
      setTurma(res.data)
    })
  }, [])


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
        <Form.Item label="Nome" required>
          <Input
            size="large"
            className="h-max"
            placeholder="Ex: Mobile"
          />
        </Form.Item>
        <Form.Item label="Numero de Horarios" required>
        <Select
              allowClear
              showSearch
              placeholder="Selecione a Turma"
              onChange={handleTurma}
              style={{ width: '100%' }}
            >
              {turma?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.quantidade_horarios}
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

export default FormTurma;
