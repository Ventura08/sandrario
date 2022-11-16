import BaseContainer from "../../component/BaseContainer/BaseContainer";
import { ArrowRightOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select, Spin } from "antd";
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
import { toast } from "react-toastify";
import {
  createAgendamento,
  getAllAgendamentos,
} from "../../services/agendamentoService";
import { AgendamentoInterface } from "../../interfaces/agendamentoInterface";
import { EventsInterface } from "../../interfaces/eventsInterface";

export default function Agenda() {
  const [selectValues, setSelectValues] = useState<{
    professor: string | undefined;
    disciplina: string | undefined;
    turma: string | undefined;
    subject: string | undefined;
  }>({
    professor: undefined,
    disciplina: undefined,
    turma: undefined,
    subject: undefined,
  });
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [professor, setProfessor] = useState<ProfessorInterface[]>();
  const [disciplina, setDisciplina] = useState<DisciplinaInterface[]>();
  const [turma, setTurma] = useState<TurmasInterface[]>();

  const [inputValueProfessor, setInputValueProfessor] = useState<string>("");
  const [inputValueMateria, setInputValueMateria] = useState<string>("");
  const [inputValueTurma, setInputValueTurma] = useState<string>("");
  const [inputValueData, setInputValueData] = useState<string>("");
  const [agendamentos, setAgendamentos] = useState<any>([]);
  const [events, setEvents] = useState<any>();
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

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

  const handleOk = async () => {
    if (
      !inputValueProfessor ||
      !inputValueMateria ||
      !inputValueTurma ||
      !inputValueData
    ) {
      toast.error("Ops, informe os dados corretamente.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    const { status, data } = await createAgendamento({
      turma_id: Number(inputValueTurma),
      professor_id: Number(inputValueProfessor),
      data_inicio: inputValueData,
      data_fim: inputValueData,
    });

    toast.success("Parabéns, agendamento cadastrado!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    if (status !== 200) {
      throw new Error();
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getTurmas = useCallback(async () => {
    await getAllTurmas().then((res) => {
      setTurma(res.data);
    });
  }, []);

  const getDisciplinas = useCallback(async () => {
    await getAllDisciplinas().then((res) => {
      setDisciplina(res.data);
    });
  }, []);

  const getProfessores = useCallback(async () => {
    await getAllProfessores().then((res) => {
      setProfessor(res.data);
    });
  }, []);

  const getAgendamentos = useCallback(async () => {
    await getAllAgendamentos().then(async (res) => {
      setAgendamentos(res.data);

    });
    getEvents();
  }, []);

  async function getEvents() {
    console.log(agendamentos);
    let i = agendamentos?.map((item: any) => {
      return {
        start: item.data_inicio,
        end: item.data_fim,
        title: `${item.professor.nome} | ${item.professor.disciplina.nome}`,
      };
    });

    console.log(i);
    setEvents(i);
  }

  const handleTurma = async (value: string) => {
    setInputValueTurma(value);
  };

  const handleData = async (value: any) => {
    let transform = value.toISOString();
    setInputValueData(transform);
  };

  const handleDisciplina = async (value: string) => {
    setInputValueMateria(value);
  };

  const handleProfessor = async (value: string) => {
    setInputValueProfessor(value);
  };

  useEffect(() => {
    getProfessores();
    getDisciplinas();
    getTurmas();
    getAgendamentos();
  }, [getProfessores, getDisciplinas, getTurmas, getAgendamentos]);

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
        views={{ month: true, week: true }}
        events={events}
        style={{ height: 500 }}
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
              style={{ width: "100%" }}
            >
              {professor?.map((item) => (
                <Select.Option key={item.id} value={item.id}>
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
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
            >
              {turma?.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.nome}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Data" required>
            <DatePicker
              format={dateFormatList}
              className="w-full"
              size="large"
              onChange={(e) => handleData(e?._d)}
              placeholder="Informe uma Data"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
