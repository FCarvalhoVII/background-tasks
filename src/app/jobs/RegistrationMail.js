import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: 'Developing test <dev@teste.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, seja bem-vindo.`
        })
    }
}