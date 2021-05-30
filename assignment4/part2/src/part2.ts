/* 2.1 */

export const MISSING_KEY = '___MISSING___'

type PromisedStore<K, V> = {
    get(key: K): Promise<V>,
    set(key: K, value: V): Promise<void>,
    delete(key: K): Promise<void>
}


export function makePromisedStore<K, V>(): PromisedStore<K, V> {
    const store = new Map<K,V>();
    return {
        get(key: K) : Promise<V> {
            return new Promise<V>((resolve, reject) => {
                const a = store.get(key)
                a != undefined ? resolve(a) : reject(MISSING_KEY) 
            })
        },
        set(key: K, value: V) : Promise<void> {
            return new Promise<void>((resolve, reject) => {
                store.set(key, value)
            })
        },
        delete(key: K) : Promise<void> {
            return new Promise<void>((resolve, reject) => {
                store.delete(key) ? resolve() : reject(MISSING_KEY)
            })
        },
    }
}

export function getAll<K, V>(store: PromisedStore<K, V>, keys: K[]): Promise<K[]> {
    return new Promise<K[]>((resolve, reject) => {
    const a : K[] = []
    keys.map((key: K)=>store.get(key),)
    })
}

/* 2.2 */

// ??? (you may want to add helper functions here)
//
// export function asycMemo<T, R>(f: (param: T) => R): (param: T) => Promise<R> {
//     ???
// }

/* 2.3 */

// export function lazyFilter<T>(genFn: () => Generator<T>, filterFn: ???): ??? {
//     ???
// }

// export function lazyMap<T, R>(genFn: () => Generator<T>, mapFn: ???): ??? {
//     ???
// }

/* 2.4 */
// you can use 'any' in this question

// export async function asyncWaterfallWithRetry(fns: [() => Promise<any>, ...(???)[]]): Promise<any> {
//     ???
// }