import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    IconButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Simple responses for demonstration
    const botResponses = {
        "hello": "Hello! How can I assist you?",
        "hours": "Our business hours are Monday to Friday, 9 AM to 5 PM.",
        "contact": "You can contact us at support@entreprise.com or call +1234567890.",
        "services": "We offer consulting, development, and support services.",
        "default": "I'm sorry, I didn't understand that. Could you rephrase your question?"
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (input.trim() === '') return;

        // Add user message
        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');

        // Simulate bot response after a short delay
        setTimeout(() => {
            const lowerInput = input.toLowerCase();
            let response = botResponses.default;

            if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                response = botResponses.hello;
            } else if (lowerInput.includes('hour')) {
                response = botResponses.hours;
            } else if (lowerInput.includes('contact')) {
                response = botResponses.contact;
            } else if (lowerInput.includes('service')) {
                response = botResponses.services;
            }

            const botMessage = { text: response, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '500px',
            maxWidth: '500px',
            margin: 'auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden'
        }}>
            <Box sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                padding: '16px',
                textAlign: 'center'
            }}>
                <Typography variant="h6">Enterprise Assistant</Typography>
            </Box>

            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                backgroundColor: '#f5f5f5'
            }}>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index} sx={{
                            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                        }}>
                            <Paper sx={{
                                padding: '8px 16px',
                                backgroundColor: message.sender === 'user' ? '#e3f2fd' : '#ffffff',
                                borderRadius: message.sender === 'user'
                                    ? '18px 18px 0 18px'
                                    : '18px 18px 18px 0'
                            }}>
                                <ListItemText
                                    primary={message.text}
                                    primaryTypographyProps={{
                                        color: 'text.primary'
                                    }}
                                />
                            </Paper>
                        </ListItem>
                    ))}
                    <div ref={messagesEndRef} />
                </List>
            </Box>

            <Box sx={{
                display: 'flex',
                padding: '16px',
                borderTop: '1px solid #ccc',
                backgroundColor: 'white'
            }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    sx={{ marginRight: '8px' }}
                />
                <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!input.trim()}
                >
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Chatbot;