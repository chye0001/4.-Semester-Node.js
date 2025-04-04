import bcrypt from 'bcryptjs';

const saltRounds = 12;
const password = "Hunter2"

const prioHashedPassword = "$2b$12$O0za6CssHocQPf12HoZNZutr0Ayzwz/h0DfnYfsOFLjhSTd/tC1ta"
const hashedPassword = await bcrypt.hash(password, saltRounds);

const isSame = await bcrypt.compare(password, prioHashedPassword);
console.log(hashedPassword)
console.log(isSame)