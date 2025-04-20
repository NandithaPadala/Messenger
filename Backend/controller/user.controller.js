import bcrypt from 'bcrypt';
import createTokenAndSaveCookie from '../jwt/generatetoken.js';
import User from '../models/user.model.js';


export const signUp = async (req, res) => {

    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password and Confirm Password do not match" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Already Exists" });
        }

        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();

        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User Created Successfully",newUser });
        }
    }

    catch (err) {
        console.error("This is catch block:", err);
        return res.status(500).json({ message: "Server Error" });
    }

}


export const login = async (req, res) => {


    const { email, password } = req.body;

    try{

        const user = await User.findOne({email});
        const  isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        else{
            createTokenAndSaveCookie(user._id, res);
            return res.status(200).json({message: "Login Successful", user: {_id: user._id, name: user.name, email: user.email}});
        }

    }catch (err) {
        console.error("This is catch block:", err);
        return res.status(500).json({ message: "Server Error" });
    }
}


export const logout = async (req, res) => {
    
    try{
        res.clearCookie("jwt");
        return res.status(200).json({ message: "Logout Successful" });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
};