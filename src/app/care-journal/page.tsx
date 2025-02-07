"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<string>("");

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 활성 상태
    const [isClosing, setIsClosing] = useState(false); // 모달 닫힘 상태

    const predefinedOptions = ["식사 준비", "약 복용 챙기기", "운동하기", "청소하기", "병원 예약"];

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (selectedTodo.trim() === "") return alert("할 일을 선택하세요.");
        const newTodoItem: Todo = {
            id: Date.now(),
            text: selectedTodo,
            isCompleted: false,
        };
        setTodos([...todos, newTodoItem]);
        setSelectedTodo("");
        closeModal(); // 모달 닫기
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleCompletion = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            })
        );
    };

    // 모달 닫기 (애니메이션 포함)
    const closeModal = () => {
        setIsClosing(true); // 닫히는 애니메이션 시작
        setTimeout(() => {
            setIsModalOpen(false); // 애니메이션 완료 후 모달 닫힘
            setIsClosing(false); // 상태 초기화
        }, 400); // 애니메이션 지속 시간과 일치
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <header className={styles.header}>
                    <button className={styles.button}>메뉴</button>
                    <h2 className={styles.title}>간병일지</h2>
                    <button className={styles.button}>달력전환</button>
                </header>

                <div className={styles.main_patient_button_layout}>
                    <button className={styles.main_patient_button}>환자1</button>
                    <button className={styles.main_patient_button}>환자2</button>
                    <button className={styles.main_patient_button}>환자3</button>
                    <button className={styles.main_patient_button}>환자4</button>
                    <button className={styles.main_patient_button}>환자5</button>
                </div>

                <div className={styles.container}>
                    <p className={styles.date_text}>2025년 1월</p>
                    <div className={styles.rightContent}>
                        <button className={styles.date_choice_button_NextPrev}>&lt;</button>
                        <span className={styles.separator}>오늘</span>
                        <button className={styles.date_choice_button_NextPrev}>&gt;</button>
                    </div>
                </div>

                <div className={styles.todolist}>
                    <button
                        className={styles.openModalButton}
                        onClick={() => setIsModalOpen(true)} // 모달 열기
                    >
                        할 일 추가하기
                    </button>

                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {todos.map((todo) => (
                            <li key={todo.id} className={styles.todolist_style}>
                <span
                    onClick={() => toggleCompletion(todo.id)}
                    style={{
                        cursor: "pointer",
                        textDecoration: todo.isCompleted ? "line-through" : "none",
                        flexGrow: 1,
                        textAlign: "left",
                    }}
                >
                  {todo.text}
                </span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    style={{
                                        backgroundColor: "#f44336",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 모달 */}
                {isModalOpen && (
                    <div
                        className={styles.modalOverlay}
                        onClick={closeModal} // 외부 클릭 시 닫기
                    >
                        <div
                            className={`${styles.modalContent} ${isClosing ? styles.modalClosing : ""}`} // 닫기 애니메이션 클래스 추가
                            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
                        >
                            <h3>할 일 선택</h3>
                            <ul className={styles.modalList}>
                                {predefinedOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSelectedTodo(option);
                                            addTodo();
                                        }}
                                        className={styles.modalOption}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.modalCloseButton} onClick={closeModal}>
                                닫기
                            </button>
                        </div>
                    </div>
                )}

                <footer className={styles.footer}>
                    <button className={styles.button}>홈</button>
                    <button className={styles.button}>커뮤니티</button>
                    <button className={styles.button}>간병일지</button>
                    <button className={styles.button}>쪽지,선물</button>
                    <button className={styles.button}>마이 페이지</button>
                </footer>
            </div>
        </div>
    );
}