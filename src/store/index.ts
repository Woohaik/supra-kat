import { ActionTree, CommitOptions, DispatchOptions, createStore, MutationTree, Store as VuexStore } from "vuex";
import axios from "axios";
import { Actions, Getters, Mutations, MutationTypes, State } from "@/types";

// Set State
const state: State = {
  kats: []
}

// define mutations 
const mutations: MutationTree<State> & Mutations = {
  ADD_KATS({ kats }, payload) {
    kats.push(...payload);
  },
  FAV_KAT({ kats }, payload) {
    const tKat = kats.filter(kat => kat.id === payload);
    tKat.forEach(kat => {
      kat.fav = true;
      localStorage.setItem(`${kat.id}`, "");
    })

  },
  UNFAV_KAT({ kats }, payload) {
    const tKat = kats.filter(kat => kat.id === payload);
    tKat.forEach(kat => {
      kat.fav = false;
      localStorage.removeItem(`${kat.id}`);
    })

  }
}

const actions: ActionTree<State, State> & Actions = {
  async fetchKatGroup({ commit }) {
    const theKatGroup = await axios.get("https://api.thecatapi.com/v1/images/search?limit=12")
    const newKats = theKatGroup.data.map((kat: any) => ({ url: kat.url, id: kat.id, fav: !!localStorage.getItem(`${kat.id}`) }));
    commit(MutationTypes.ADD_KATS, newKats);
  }
}

const getters: Getters = {
  getKats(state) {
    return state.kats;
  },
  getFavKats(state) {
    return state.kats.filter(kat => !!kat.fav)
  }
}

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});



