
import axios from 'axios'
import dotenv from 'dotenv'
import { client } from '../index.js'
dotenv.config();

export const postText = async (req, res) => {
    const { text, activeChatId } = req.body;
    try {
        
        console.log(req.body);
        
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: text }, 
            ],
        });
        console.log(response.choices[0].message.content);
        
        await axios.post(
            `https://api.chatengine.io/chats/${activeChatId}/messages/`,
            { text: response.choices[0].message.content },
            {
                headers: {
                    "Project-ID": process.env.PROJECT_ID,
                    "User-Name": process.env.BOT_USER_NAME,
                    "User-Secret": process.env.BOT_USER_SECRET,
                },
            }
        );

        res.status(200).json({ text: response.choices[0].message.content });
    } catch (error) {
        console.error("Error in postText:", error);
        await axios.post(
            `https://api.chatengine.io/chats/${activeChatId}/messages/`,
            { text: "Insufficient Quota. I can't assist today, sorry!" },
            {
                headers: {
                    "Project-ID": process.env.PROJECT_ID,
                    "User-Name": process.env.BOT_USER_NAME,
                    "User-Secret": process.env.BOT_USER_SECRET,
                },
            }
        );
        res.status(500).json({ error: error.message });
    }
};