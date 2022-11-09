import BaseContainer from "../../component/BaseContainer/BaseContainer";
import { ArrowRightOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { RequiredMark } from "antd/lib/form/Form";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


export default function Agenda() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const localizer = momentLocalizer(moment);

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-5 m-5 rounded-md flex flex-col w-11/12">
      <div className="flex justify-between  align-middle w-full mb-3">
        <div className="flex align-middle">
          <span className="bg-logoDarkPurple w-9 h-9 text-center leading-7 rounded-md">
            <FileTextOutlined style={{ color: "#ffffff", fontSize: "12px" }} />
          </span>
          <p className="mt-2 ml-2 text-base">Página de Agendamento</p>
        </div>
        <Button
          onClick={() => showModal()}
          type="default"
          className="filter-button flex align-middle bg-logoDarkPurple rounded-md border-none"
          style={{ color: "#ffffff" }}
        >
          <span
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="mr-2">Agendar</span>
            <ArrowRightOutlined />
          </span>
        </Button>
      </div>
      <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          views={{month: true, week: true}}
          events={[
            {
              start: moment().toDate(),
              end: moment()
                .add(1, "days")
                .toDate(),
              title: "Some title"
            },
            {
              start: new Date(),
              end:  new Date("2022 11 25"),
              title: "jaooo title"
            }
          ]}
          style={{ height: 500}}
        />
      <Modal
        title="Agendamento de aulas"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          className={"p-0"}
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item label="Professor" required>
            <Select
              showSearch
              size="large"
              placeholder="Selecione um Professor"
              optionFilterProp="children"
              onChange={(e) => console.log(e.target.value)}
              onSearch={(e) => console.log(e)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Sandra Alves",
                },
                {
                  value: "2",
                  label: "Luciene Silva",
                },
                {
                  value: "3",
                  label: "Wladmir",
                },
              ]}
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
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
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
          <Form.Item label="Turma" required>
            <Select
              showSearch
              size="large"
              placeholder="Selecione uma Turma"
              optionFilterProp="children"
              onChange={(e) => console.log(e.target.value)}
              onSearch={(e) => console.log(e)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Mobile",
                },
                {
                  value: "2",
                  label: "Redes",
                },
                {
                  value: "3",
                  label: "ADS",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Data" required>
            <DatePicker className="w-full" size="large" placeholder="Informe uma Data" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
