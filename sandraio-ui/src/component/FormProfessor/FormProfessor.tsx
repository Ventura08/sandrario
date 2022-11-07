import react, { ReactElement, useState } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import CustomButton from "../Button/Button";

interface FormProfessorProps {
  className?: string;
  teste?: boolean;
}

const FormProfessor = (props: FormProfessorProps): ReactElement => {
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
          <Input size="large" className="h-max" placeholder="Ex: Wladmir" />
        </Form.Item>
      </Form>
      <div className="self-end">
        <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DO ALUNO')}/>
      </div>
    </div>
  );
};

export default FormProfessor;
