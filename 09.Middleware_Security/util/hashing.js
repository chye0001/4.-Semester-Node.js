import bcrypt from 'bcryptjs';

const saltRounds = 12;
const password = "1234"

const prioHashedPassword = "$2b$12$leU7sR190IMKzX9P.R.QaOhlV1EiyGDtYh2RcFZxQd1cfYxdzDg9S"
const hashedPassword = await bcrypt.hash(password, saltRounds);

const isSame = await bcrypt.compare(password, prioHashedPassword);
console.log(hashedPassword)
console.log(isSame)