
import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  UserID: string;
  Name: string;
  Email: string;
  Phone: string;
  BirthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactname: string;
  emergencycontactNumber: string;
  primaryPhysician: string;
  insuranceprovider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentmedication: string | undefined;
  familymedicalhistory: string | undefined;
  pastmedicalhistory: string | undefined;
  identificationtype: string | undefined;
  identificationnumber: string | undefined;
  identificationdocument: FormData | undefined;
  PrivacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userID: string;
  cancellationReason: string | null;
}
