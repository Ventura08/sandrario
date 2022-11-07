import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import React, { ReactElement, useState } from "react";
import CustomButton from "../Button/Button";

interface FormHorarioProps {
    className?: string;
    teste: boolean;
}

const FormHorario = (props: FormHorarioProps): ReactElement => {



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
          <Form.Item label="Turma" required>
            <Select
              showSearch
              size="large"
              placeholder="Selecione a Turma"
              optionFilterProp="children"
              onChange={(e) => console.log(e.target.value)}
              onSearch={(e) => console.log(e)}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "MOBILE",
                },
                {
                  value: "2",
                  label: "REDES",
                },
                {
                  value: "3",
                  label: "ADS",
                },
                {
                  value: "ENG.SOFTWARE",
                  label: "4",
                },
                {
                  value: "5",
                  label: "ENG.COMPUTAÇÃO",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Disciplina" required>
            <Select
              showSearch
              size="large"
              placeholder="Selecione a Disciplina"
              optionFilterProp="children"
              onChange={(e) => console.log(e.target.value)}
              onSearch={(e) => console.log(e)}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "DevWeb",
                },
                {
                  value: "2",
                  label: "Framework",
                },
                {
                  value: "3",
                  label: "Matemática",
                },
                {
                  value: "4",
                  label: "Geografia",
                },
                {
                  value: "5",
                  label: "Historia",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Professor" required>
            <Select
              showSearch
              size="large"
              placeholder="Selecione o Professor"
              optionFilterProp="children"
              onChange={(e) => console.log(e.target.value)}
              onSearch={(e) => console.log(e)}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Sandra",
                },
                {
                  value: "2",
                  label: "Barbara",
                },
                {
                  value: "3",
                  label: "Nicolle",
                },
                {
                  value: "4",
                  label: "Rafa",
                },
                {
                  value: "5",
                  label: "Gabriel",
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
  
  export default FormHorario;