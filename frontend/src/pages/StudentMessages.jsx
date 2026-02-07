import React, { useState } from 'react';
import styles from './StudentMessages.module.css';

const StudentMessages = () => {
    const [activeChat, setActiveChat] = useState(1);

    // Mock Conversations
    const conversations = [
        { id: 1, name: 'TechNova', lastMsg: 'When can you start?', time: '2m ago', active: true },
        { id: 2, name: 'WebSolutions', lastMsg: 'Thanks for applying.', time: '1h ago', active: false },
        { id: 3, name: 'DailyBlog', lastMsg: 'Payment processed.', time: '1d ago', active: false },
    ];

    const [messageInput, setMessageInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { id: 1, sender: 'TechNova', text: 'Hi! We liked your profile.', time: '10:00 AM' },
        { id: 2, sender: 'You', text: 'Thanks! I am interested in the logo design gig.', time: '10:05 AM' },
        { id: 3, sender: 'TechNova', text: 'Great. When can you start?', time: '10:07 AM' },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const newMsg = {
            id: chatHistory.length + 1,
            sender: 'You',
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChatHistory([...chatHistory, newMsg]);
        setMessageInput('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.sectionTitle}>Messages</h2>
                </div>
                <div className={styles.conversationList}>
                    {conversations.map(chat => (
                        <div
                            key={chat.id}
                            className={`${styles.conversationItem} ${activeChat === chat.id ? styles.active : ''}`}
                            onClick={() => setActiveChat(chat.id)}
                        >
                            <div className={styles.avatarPlaceholder}>{chat.name[0]}</div>
                            <div className={styles.conversationInfo}>
                                <h4 className={styles.senderName}>{chat.name}</h4>
                                <p className={styles.lastMessage}>{chat.lastMsg}</p>
                            </div>
                            <span className={styles.time}>{chat.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.chatArea}>
                <div className={styles.chatHeader}>
                    <div className={styles.avatarSmall}>T</div>
                    <h3 className={styles.chatTitle}>TechNova</h3>
                </div>

                <div className={styles.messagesList}>
                    {chatHistory.map(msg => (
                        <div key={msg.id} className={`${styles.messageBubble} ${msg.sender === 'You' ? styles.sent : styles.received}`}>
                            <p className={styles.messageText}>{msg.text}</p>
                            <span className={styles.messageTime}>{msg.time}</span>
                        </div>
                    ))}
                </div>

                <form className={styles.inputArea} onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className={styles.messageInput}
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button type="submit" className={styles.sendBtn}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default StudentMessages;
