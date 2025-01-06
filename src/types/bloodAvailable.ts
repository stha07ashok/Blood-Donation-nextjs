export interface BloodAvailableTypeProps {
  id: number | string;
  bloodType: string;
  availableBottles: number | string;
  expireDate: string;
  donarName: string;
  button: { buttonn: "button" | "submit" };
  SN: string;
  action: string;
  bloodReport: string;
}
