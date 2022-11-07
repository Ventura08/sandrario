import react, { ReactElement, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import "./formTurma.css";
import CustomButton from "../Button/Button";

interface FormTurmaProps {
  className?: string;
  teste?: boolean;
}

const FormTurma = (props: FormTurmaProps): ReactElement => {



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
          <Input
            size="large"
            className="h-max"
            placeholder="Ex: Mobile"
          />
        </Form.Item>
        <Form.Item label="Numero de Horarios" required>
          <Select
            showSearch
            size="large"
            placeholder="Selecione a quantidade de horários"
            optionFilterProp="children"
            onChange={(e) => console.log(e.target.value)}
            onSearch={(e) => console.log(e)}
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
          />
        </Form.Item>
      </Form>
      <div className="self-end">
        <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DO ALUNO')}/>
      </div>
    </div>
  );
};

export default FormTurma;
