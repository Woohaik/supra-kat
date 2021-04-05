
import { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from "vuex";
export interface State {
    kats: kat[];
}

export type Getters = {
    getKats(state: State): kat[];
    getFavKats(state: State): kat[];
}

export enum MutationTypes {
    ADD_KATS = "ADD_KATS",
    FAV_KAT = "FAV_KAT",
    UNFAV_KAT = "UNFAV_KAT"
}

export enum ActionTypes {
    fetchKatGroup = "fetchKatGroup",
}


// Mutation Types
export type Mutations<S = State> = {
    [MutationTypes.ADD_KATS](state: S, payload: kat[]): void;
    [MutationTypes.FAV_KAT](state: S, payload: string): void;
    [MutationTypes.UNFAV_KAT](state: S, payload: string): void;
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">; // Sobreescribiendo el commit



export interface Actions {
    [ActionTypes.fetchKatGroup](
        { commit }: AugmentedActionContext,
        payload?: any
    ): void
}

export type Store = Omit<
    VuexStore<State>,
    "getters" | "commit" | "dispatch"
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}
    & {
        getters: {
            [K in keyof Getters]: ReturnType<Getters[K]>
        }
    }




export interface kat {
    url: string;
    id: string;
    fav: boolean;
}