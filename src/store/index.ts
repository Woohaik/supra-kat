import { ActionTree, createStore, MutationTree } from "vuex";
import axios from "axios";
import { Actions, Getters, kat, Mutations, MutationTypes, State } from "@/types";


const state: State = {
  kats: []
}

const mutations: MutationTree<State> & Mutations = {
  ADD_KATS({ kats }, payload: kat[]): void {
    kats.push(...payload);
  },
  FAV_KAT({ kats }, payload) {
    const tKat = kats.filter(kat => kat.id === payload);
    tKat.forEach(kat => {
      kat.fav = true;
    })

  },
  UNFAV_KAT({ kats }, payload): void {
    const tKat = kats.filter(kat => kat.id === payload);
    tKat.forEach(kat => {
      kat.fav = false;
    })
  }
}

const actions: ActionTree<State, State> & Actions = {
  async fetchKatGroup({ commit }): Promise<void> {
    const theKatGroup = await axios.get("https://api.thecatapi.com/v1/images/search?limit=12")
    const newKats: kat[] = theKatGroup.data.map((kat: kat) => ({ url: kat.url, id: kat.id, fav: false }));
    commit(MutationTypes.ADD_KATS, newKats);
  }
}

const getters: Getters = {
  getKats(state: State): kat[] {
    return state.kats;
  },
  getFavKats(state: State): kat[] {
    return state.kats.filter(kat => !!kat.fav)
  }
}

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});



