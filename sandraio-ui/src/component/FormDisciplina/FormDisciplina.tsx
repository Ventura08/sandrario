import react, { ReactElement, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import CustomButton from "../Button/Button";

interface FormDisciplinaProps {
  className?: string;
  teste?: boolean;
}

const FormDisciplina = (props: FormDisciplinaProps): ReactElement => {
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
          <Input size="large" className="h-max" placeholder="Ex: 12000604" />
        </Form.Item>
        <Form.Item label="Aulas totais" required>
          <Input size="large" className="h-max" placeholder="Ex: 2" />
        </Form.Item>
        <Form.Item label="Valor hora aula" required>
          <Input size="large" className="h-max" placeholder="Ex: 50,00" />
        </Form.Item>
      </Form>
      <div className="self-end">
        <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DA DISCIPLINA')}/>
      </div>
    </div>
  );
};

export default FormDisciplina;
