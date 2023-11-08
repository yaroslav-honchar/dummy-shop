import { CoreService } from "@/services/core.service"

class Auth extends CoreService {
  async login() {
    return ""
  }
}

export const AuthService = new Auth()