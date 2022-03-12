import { ChangeEvent, useState } from "react"

export const useInput = (text: string) => {
    const [value , setValue] = useState<string>(text)

    return {
        bind: () => {
            return {
                value,
                onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
            }
        },
        cleaner: () => setValue(''),
        getValue: (): string => value
    }
}