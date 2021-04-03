import { ActionTree, CommitOptions, DispatchOptions, createStore, MutationTree, Store as VuexStore } from "vuex";
import axios from "axios";
import { Actions, Getters, Mutations, MutationTypes, State } from "@/types";

// Set State
const state: State = {
  favKats: [],
  kats: []
}

// define mutations 
const mutations: MutationTree<State> & Mutations = {
  ADD_KATS({ kats }, payload) {
    kats.push(...payload);
  }
}

const actions: ActionTree<State, State> & Actions = {
  async fetchKatGroup({ commit }) {
    const theKatGroup = await axios.get("https://api.thecatapi.com/v1/images/search?limit=9")
    console.log(theKatGroup.data);
    
    const newKats = theKatGroup.data.map((kat: any) => ({ url: kat.url, id: kat.id }));
    commit(MutationTypes.ADD_KATS, newKats);
  }
}

const getters: Getters = {
  getKats(state) {
    return state.kats;
  },
  getFavKats(state) {
    return state.favKats
  }
}

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

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


