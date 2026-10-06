"use server";

import { db } from "@/lib/db";

export type PatientState = {
  success: boolean;
  message: string;
};

export async function createPatient(
  prevState: PatientState,
  formData: FormData,
): Promise<PatientState> {
  try {
    const patientName = formData.get("patientName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const gender = formData.get("gender") as string;

    if (!patientName || !email || !phone || !dateOfBirth || !gender) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    await db.execute(
      `INSERT INTO patients_details
       (patient_name, email, phone, date_of_birth, gender)
       VALUES (?, ?, ?, ?, ?)`,
      [patientName, email, phone, dateOfBirth, gender],
    );

    return {
      success: true,
      message: "Patient saved successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to save patient",
    };
  }
}
