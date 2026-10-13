import { ActionReducerMap } from "@ngrx/store";
import { LayoutState, layoutReducer } from "./layouts/layout-reducers";
import { EcommerceState, ecommercerReducer } from "./Ecommerce/ecommerce_reducer";
import { CRMReducer, CRMState } from "./CRM/crm_reducer";
import { TicketReducer, TicketState } from "./Ticket/ticket_reducer";
import { ApikeyReducer, ApikeyState } from "./APIKey/apikey_reducer";
// import { authenticationReducer, AuthenticationState } from "./Authentication/authentication.reducer";

export interface RootReducerState {
    layout: LayoutState;
    Ecommerce: EcommerceState;
    CRM: CRMState;
    Ticket: TicketState;
    APIKey: ApikeyState;
    // authentication: AuthenticationState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Ecommerce: ecommercerReducer,
    CRM: CRMReducer,
    Ticket: TicketReducer,
    APIKey: ApikeyReducer
    // authentication: authenticationReducer,
}