import { PontoForm } from '../forms/PontoForm'
import Ponto from '../models/Ponto'

export class PontoFactory {
  static buildPonto (pontoForm: PontoForm) : Ponto {
    setUser()
    setTime()
    setId()

    function setUser () {

    }

    function setTime () {

    }

    function setId () {
      if (pontoForm.id) {
        this.id = pontoForm.id
      }
    }
  }
}
