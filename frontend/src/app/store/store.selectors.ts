import {AppStateInterface} from "./store.state.interface";
import {createFeatureSelector} from "@ngrx/store";


const getSelector = createFeatureSelector<AppStateInterface>('appState')
