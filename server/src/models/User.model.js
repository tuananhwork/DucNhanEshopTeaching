import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Định nghĩa schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must have at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must have at least 6 characters'],
      select: false, // không trả password khi query
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    address: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Middleware: hash password trước khi save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // chỉ hash khi password thay đổi
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method: kiểm tra password khi login
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
