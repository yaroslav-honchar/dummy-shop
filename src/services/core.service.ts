import Cookies from "js-cookie"

type TCookieName = string

export class CoreService {
  API_URL = process.env.NEXT_PUBLIC_DOMAIN

  setCookie(name: TCookieName, value: string, options?: Cookies.CookieAttributes) {
    if (typeof window === undefined) {
      return
    }

    Cookies.set(name, value, options)
  }

  getCookie(name: TCookieName) {
    if (typeof window === undefined) {
      return ""
    }

    const token: string | undefined = Cookies.get(name)

    return token ? token : ""
  }
}