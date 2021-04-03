import { ActionContext } from "vuex";

export interface State {
    favKats: any[];
    kats: any[];
}
export type Getters = {
    getKats(state: State): any[];
    getFavKats(state: State): any[];
}


export enum MutationTypes {
    ADD_KATS = "ADD_KATS",
    ADD_FAVORITE_KAT = "ADD_FAVORITE_KAT"
}

export enum ActionTypes {
    fetchKatGroup = "fetchKatGroup",
}


// Mutation Types
export type Mutations<S = State> = {
    [MutationTypes.ADD_KATS](state: S, payload: any): void;
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