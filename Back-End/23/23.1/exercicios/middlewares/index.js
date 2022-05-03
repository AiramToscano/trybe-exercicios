
const verifcCampos = (req,res, next) => {
    const {email,firstName,lastName} = req.body;
    if (firstName === '' || firstName === undefined) return res.status(404).json({ message: 'Todos os campos obrigatorios' });
    if (lastName === '' || lastName === undefined) return res.status(404).json({ message: 'Todos os campos obrigatorios'});
    if (email === '' || email === undefined) return res.status(404).json({ message: 'Todos os campos obrigatorios'});
    return next();
}

const isValidpassword1 = (req,res, next) => {
    const {password} = req.body
    if(password.length < 6) return res.status(404).json({ message: 'campo password deve ter pelo menos 6 caracteres' })
    return next();
   }

module.exports = {
    verifcCampos,
    isValidpassword1,

}