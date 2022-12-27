import PocketBase from "pocketbase"

export const pb = new PocketBase(import.meta.env.VITE_API_URL)

async function runGracefully<T>(fn: () => Promise<T>) {
  try {
    const result = await fn()
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
export default pb
