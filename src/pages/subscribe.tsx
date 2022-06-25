import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../components/logo"
import { useCreateSubscriberMutation } from "../graphql/generated"
import mockup from './../assets/code-mockup.png'

const Subscribe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    
    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    const handleSubmit = async (evt : FormEvent) =>{
        evt.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email,
            }
        }).then((_) => {
            setName('')
            setEmail('')
        })

        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen min-w-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-6xl flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-2xl">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma aplicação <strong className="text-blue-500">completa</strong>, do zero, com 
                        <strong className="text-blue-500"> React</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas 
                    e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={((evt)=> setName(evt.target.value))}
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email" 
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={((evt)=> setEmail(evt.target.value))}
                        />
                        <button 
                        disabled={loading}
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors
                        disabled:opacity-50"
                        type="submit"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={mockup} className="mt-10" alt="imagem ilustrativa de código" />
        </div>
    )
}

export default Subscribe