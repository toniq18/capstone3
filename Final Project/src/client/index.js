import { handleSubmit } from './js/formHandler'
import { weatherbit } from './js/weatherbit'

document.getElementById('generate').addEventListener('click', handleSubmit)


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    handleSubmit,
    weatherbit
}