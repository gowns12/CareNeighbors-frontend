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

    // Sample drop-down list options
    const predefinedOptions = ["식사 준비", "약 복용 챙기기", "운동하기", "청소하기", "병원 예약"];

    // 브라우저가 로컬 스토리지에서 데이터를 가져옴
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // 상태 변경 시 로컬 스토리지에 데이터 저장
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // 할 일 추가
    const addTodo = () => {
        if (selectedTodo.trim() === "") return alert("할 일을 선택하세요.");
        const newTodoItem: Todo = {
            id: Date.now(), // 고유 ID 생성
            text: selectedTodo,
            isCompleted: false,
        };
        setTodos([...todos, newTodoItem]); // 기존 리스트에 추가
        setSelectedTodo(""); // 선택 초기화
    };

    // 할 일 삭제
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id)); // 특정 ID 삭제
    };

    // 완료 상태 토글
    const toggleCompletion = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }; // 완료 상태 토글
                }
                return todo;
            })
        );
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <header className={styles.header}>
                    <button className={styles.button}>메뉴</button>
                    <h2 className={styles.title}>간병일지</h2>
                    <button className={styles.button}> 달력전환</button>
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
                    <div>
                        {/* Drop-down 리스트 */}
                        <select
                            value={selectedTodo}
                            onChange={(e) => setSelectedTodo(e.target.value)}
                            style={{
                                padding: "8px",
                                fontSize: "16px",
                                width: "70%",
                                marginRight: "10px",
                            }}
                        >
                            <option value="">할 일을 선택하세요</option>
                            {predefinedOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={addTodo}
                            style={{
                                padding: "8px 16px",
                                fontSize: "16px",
                                backgroundColor: "#4CAF50",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            추가
                        </button>
                    </div>
                    {/* To-Do 리스트 */}
                    <ul  style={{ listStyleType: "none", padding: 0}} >
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className={styles.todolist_style}
                            >
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