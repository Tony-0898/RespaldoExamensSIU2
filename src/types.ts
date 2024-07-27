// src/types.ts
export type RootStackParamList = {
    HomeScreen: undefined;
  LoanForm: undefined;
    AmortizationPlan: {
      datos: {
        monto: number;
        tasaInteres: number;
        plazo: number;
        fechaDesembolso: string;
      };
      data: {
        cuota: number;
        fecha: string;
        interes: number;
        principal: number;
        saldo: number;
        svsd: number;
        cuotaTotal: number;
      }[];
    };
  };
  