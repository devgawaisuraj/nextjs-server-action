"use client";

import { useActionState } from "react";
import { createPatient, PatientState } from "../app/actions/patient";

const initialState: PatientState = {
  success: false,
  message: "",
};

export default function PatientPage() {
  const [state, formAction] = useActionState(createPatient, initialState);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
            🏥
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            Patient Registration
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter the patient details to create a new patient record.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <form action={formAction} className="space-y-6">
            {/* Patient Information */}
            <div>
              <h2 className="mb-1 text-lg font-semibold text-slate-800">
                Patient Information
              </h2>

              <p className="mb-6 text-sm text-slate-500">
                Please provide the basic information of the patient.
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Patient Name */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="patientName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Patient Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="patientName"
                    type="text"
                    name="patientName"
                    placeholder="Enter patient name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="patient@example.com"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Date of Birth <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200" />

            {/* Submit */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                <span className="text-red-500">*</span> Required fields
              </p>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                Save Patient
              </button>
            </div>
          </form>

          {/* Response Message */}
          {state.message && (
            <div
              className={`mt-6 rounded-lg border px-4 py-3 text-sm ${
                state.success
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{state.success ? "✅" : "❌"}</span>
                <span>{state.message}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Patient information is securely stored in the healthcare system.
        </p>
      </div>
    </main>
  );
}
