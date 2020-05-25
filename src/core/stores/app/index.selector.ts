import { createSelector } from "@reduxjs/toolkit";

export const selectApp = (state: any) => state.app;
export const selectLoading = createSelector(selectApp, app => app.loading);