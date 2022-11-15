import BaseContainer from "../../component/BaseContainer/BaseContainer";
import { ArrowRightOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { RequiredMark } from "antd/lib/form/Form";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAllTurmas } from "../../services/turmasService";
import { getAllDisciplinas } from "../../services/disciplinaService";
import { getAllProfessores } from "../../services/professorService";
import { ProfessorInterface } from "../../interfaces/professorInterface";
import { DisciplinaInterface } from "../../interfaces/disciplinaInterface";
import { TurmasInterface } from "../../interfaces/turmaInterface";


export default function Agenda() {
  const [selectValues, setSelectValues] = useState<{
    professor: string | undefined;
    disciplina: string | undefined;
    turma: string | undefined;
    subject: string | undefined;
  }>({ professor: undefined, disciplina: undefined, turma: undefined, subject: undefined })
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [professor, setProfessor] = useState<ProfessorInterface[]>()
  const [disciplina, setDisciplina] = useState<DisciplinaInterface[]>()
  const [turma, setTurma] = useState<TurmasInterface[]>()

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

  const getTurmas = useCallback(async () => {
    await getAllTurmas().then((res) => {
      setTurma(res.data)
    })
  }, [])

  const getDisciplinas = useCallback(async () => {
    await getAllDisciplinas().then((res) => {
      setDisciplina(res.data)
    })
  }, [])


  const getProfessores = useCallback(async () => {
    await getAllProfessores().then((res) => {
      setProfessor(res.data)
    })
  }, [])

  const handleTurma = async (value: string) => {
    console.log(value)
  }

  const handleDisciplina = async (value: string) => {
    console.log(value)
  }
  
  const handleProfessor = async (value: string) => {
    console.log(value)
  }


  useEffect(() => {
    getProfessores()
    getDisciplinas()
    getTurmas()
  }, [getProfessores, getDisciplinas, getTurmas])

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
              allowClear
              showSearch
              placeholder="Selecione o Professor"
              value={selectValues?.professor}
              onChange={handleProfessor}
              style={{ width: '100%' }}
            >
              {professor?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
          <Form.Item label="Matéria" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione a matéria"
              value={selectValues?.disciplina}
              onChange={handleDisciplina}
              style={{ width: '100%' }}
            >
              {disciplina?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
          <Form.Item label="Turma" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione a turma"
              value={selectValues?.turma}
              onChange={handleTurma}
              style={{ width: '100%' }}
            >
              {turma?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
          <Form.Item label="Data" required>
            <DatePicker className="w-full" size="large" placeholder="Informe uma Data" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
