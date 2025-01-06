export interface RegisterFormDataProps {
  email: string;
  citizenshipNumber: number;
  contactNumber: number;
  address: string;
  bloodBankBranch: { value: string; label: string };
  fullName: string;
  gender: boolean;
  date: number;
  time: number;
}
