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
        <Form.Item label="Data" required>
          <DatePicker
            className="w-full"
            size="large"
            placeholder="Informe uma Data"
          />
        </Form.Item>
        <Form.Item label="Matéria" required>
          <Select
            showSearch
            size="large"
            placeholder="Selecione uma Matéria"
            optionFilterProp="children"
            onChange={(e) => console.log(e.target.value)}
            onSearch={(e) => console.log(e)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Matemática",
              },
              {
                value: "2",
                label: "Geografia",
              },
              {
                value: "3",
                label: "Química",
              },
            ]}
          />
        </Form.Item>
      </Form>
      <div className="self-end">
        <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DO ALUNO')}/>
      </div>
    </div>
  );
};

export default FormProfessor;
