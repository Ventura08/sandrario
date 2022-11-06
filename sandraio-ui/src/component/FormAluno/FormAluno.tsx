import react, { ReactElement, useState } from "react";
import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import "./formAluno.css";
import CustomButton from "../Button/Button";

interface FormAlunoProps {
  className?: string;
  teste?: boolean;
}

const FormAluno = (props: FormAlunoProps): ReactElement => {



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
        <Form.Item label="Matricula" required>
          <Input
            size="large"
            className="h-max"
            placeholder="Ex: 12000604"
          />
        </Form.Item>
        <Form.Item label="Nome" required>
          <Input
            size="large"
            className="h-max"
            placeholder="Ex: Sandra Alvez"
          />
        </Form.Item>
        <Form.Item label="Turma" required>
          <Select
            showSearch
            size="large"
            placeholder="Selecione uma Turma"
            optionFilterProp="children"
            onChange={(e) => console.log(e.target.value)}
            onSearch={(e) => console.log(e)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "3B1",
              },
              {
                value: "2",
                label: "3A1",
              },
              {
                value: "3",
                label: "3C1",
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

export default FormAluno;
