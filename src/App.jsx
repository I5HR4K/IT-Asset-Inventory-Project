import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

const navConfig = [
  {
    label: "Invoice",
    actions: [
      { label: "Create Invoice", path: "/invoice/create" },
      { label: "Update Invoice", path: "/invoice/update" },
      { label: "Query Invoice", path: "/invoice/query" }
    ]
  },
  {
    label: "Reports",
    actions: [
      { label: "General Tracking Report", path: "/reports/general-tracking" },
      { label: "Barcode Search", path: "/reports/barcode-search" },
      { label: "Audit Report", path: "/reports/audit-report" },
      { label: "Audit Room", path: "/reports/audit-room" }
    ]
  },
  {
    label: "Administrator Options",
    actions: [
      { label: "Approve Invoice", path: "/admin/approve-invoice" },
      { label: "Manage Technicians", path: "/admin/manage-technicians" },
      { label: "Manage Department", path: "/admin/manage-department" }
    ]
  }
];

function DropdownMenu({ label, actions, isOpen, onToggle, closeMenu }) {
  return (
    <div className="relative">
      <button className="menu-button min-w-44" onClick={onToggle} type="button">
        {label}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 z-20 w-64 space-y-2 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg">
          {actions.map((action) => (
            <Link
              key={action.label}
              className="dropdown-action block"
              onClick={closeMenu}
              to={action.path}
            >
              {action.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
            <img
              alt="Central Connecticut State University logo"
              className="h-20 w-auto object-contain"
              src="/ccsu-logo.png"
            />
          </div>
          <h1 className="max-w-3xl font-display text-xl leading-relaxed text-slate-800 sm:text-2xl">
            IIS is an inventory software that is designed specifically to meet the requirements of CCSU IT Inventory System.
          </h1>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-lg uppercase tracking-[0.16em] text-blue-800">Main Features:</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-lg text-slate-700">
          <li>BARCODE formats and barcode scanners support.</li>
          <li>INVOICE management.</li>
          <li>TRACK GLBA items.</li>
          <li>TRACK items as they change hands or move around within CCSU.</li>
          <li>SEARCH for items by invoice number, transaction type, transaction date and location.</li>
          <li>Maintain a HISTORY of changes to an asset.</li>
        </ul>
      </div>
    </section>
  );
}

function CreateInvoicePage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Create Invoice</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="invoiceNumber">
              Invoice #
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
              defaultValue="39523"
              id="invoiceNumber"
              name="invoiceNumber"
              readOnly
              type="text"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="transactionType">
                Transaction Type
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="transactionType"
                name="transactionType"
              >
                <option disabled value="">
                  Select Transaction Type
                </option>
                <option value="purchase">Purchase</option>
                <option value="transfer">Transfer</option>
                <option value="repair">Repair</option>
                <option value="disposal">Disposal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="technicianName">
                Technician Name
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="technicianName"
                name="technicianName"
              >
                <option disabled value="">
                  Select Technician
                </option>
                <option value="tech-1">Technician 1</option>
                <option value="tech-2">Technician 2</option>
                <option value="tech-3">Technician 3</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="receivingDepartment">
                Receiving Department
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="receivingDepartment"
                name="receivingDepartment"
              >
                <option disabled value="">
                  Select Department
                </option>
                <option value="it">IT Services</option>
                <option value="library">Library</option>
                <option value="finance">Finance</option>
                <option value="facilities">Facilities</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="heatCallNumber">
                Heat Call #
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="heatCallNumber"
                name="heatCallNumber"
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="technicianPhone">
                Technician Phone
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="technicianPhone"
                name="technicianPhone"
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="recipient">
                Recipient
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="recipient"
                name="recipient"
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="recipientPhone">
                Recipient Phone
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="recipientPhone"
                name="recipientPhone"
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="creationDate">
                Creation Date
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue={today}
                id="creationDate"
                name="creationDate"
                type="date"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="modificationDate">
                Modification Date
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue={today}
                id="modificationDate"
                name="modificationDate"
                type="date"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="min-h-36 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
              id="comment"
              name="comment"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              type="submit"
            >
              Save Invoice
            </button>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              to="/home"
            >
              Close
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function UpdateInvoicePage() {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Update Invoice</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="updateInvoiceNumber">
              Invoice #
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
              id="updateInvoiceNumber"
              name="updateInvoiceNumber"
              type="text"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="updateTransaction">
                Transaction
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="updateTransaction"
                name="updateTransaction"
              >
                <option disabled value="">
                  Select Transaction
                </option>
                <option value="purchase">Purchase</option>
                <option value="transfer">Transfer</option>
                <option value="repair">Repair</option>
                <option value="disposal">Disposal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="updateTechnician">
                Technician
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="updateTechnician"
                name="updateTechnician"
              >
                <option disabled value="">
                  Select Technician
                </option>
                <option value="tech-1">Technician 1</option>
                <option value="tech-2">Technician 2</option>
                <option value="tech-3">Technician 3</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="updateFrom">
                From
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="updateFrom"
                name="updateFrom"
              >
                <option disabled value="">
                  Select Source
                </option>
                <option value="it">IT Services</option>
                <option value="library">Library</option>
                <option value="finance">Finance</option>
                <option value="facilities">Facilities</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="updateTo">
                To
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="updateTo"
                name="updateTo"
              >
                <option disabled value="">
                  Select Destination
                </option>
                <option value="it">IT Services</option>
                <option value="library">Library</option>
                <option value="finance">Finance</option>
                <option value="facilities">Facilities</option>
              </select>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-slate-800">Inventory Date Range</p>
            <p className="mt-1 text-xs text-amber-800">
              Date format warning: enter dates only as MM/DD/YYYY (example: 03/02/2026).
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="inventoryDateFrom">
                  From (MM/DD/YYYY)
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="inventoryDateFrom"
                  inputMode="numeric"
                  name="inventoryDateFrom"
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$"
                  placeholder="MM/DD/YYYY"
                  title="Please use MM/DD/YYYY format."
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="inventoryDateTo">
                  To (MM/DD/YYYY)
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="inventoryDateTo"
                  inputMode="numeric"
                  name="inventoryDateTo"
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$"
                  placeholder="MM/DD/YYYY"
                  title="Please use MM/DD/YYYY format."
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              type="submit"
            >
              Get List
            </button>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              to="/home"
            >
              Close
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function QueryInvoicePage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Query Invoice</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryInvoiceNumber">
              Invoice #
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
              id="queryInvoiceNumber"
              name="queryInvoiceNumber"
              type="text"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryTransactionType">
                Transaction Type
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryTransactionType"
                name="queryTransactionType"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryTechnicianName">
                Technician Name
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryTechnicianName"
                name="queryTechnicianName"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryReceivingDepartment">
                Receiving Department
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryReceivingDepartment"
                name="queryReceivingDepartment"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryHeatCallNumber">
                Heat Call #
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryHeatCallNumber"
                name="queryHeatCallNumber"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryTechnicianPhone">
                Technician Phone
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryTechnicianPhone"
                name="queryTechnicianPhone"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryRecipient">
                Recipient
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryRecipient"
                name="queryRecipient"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryRecipientPhone">
                Recipient Phone
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryRecipientPhone"
                name="queryRecipientPhone"
                readOnly
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryCreationDate">
                Creation Date
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                defaultValue={today}
                id="queryCreationDate"
                name="queryCreationDate"
                readOnly
                type="date"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryModificationDate">
                Modification Date
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                defaultValue={today}
                id="queryModificationDate"
                name="queryModificationDate"
                readOnly
                type="date"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryApproved">
                Approved
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
                id="queryApproved"
                name="queryApproved"
                readOnly
                type="text"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="queryComment">
              Comment
            </label>
            <textarea
              className="min-h-36 w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-700"
              id="queryComment"
              name="queryComment"
              readOnly
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              type="submit"
            >
              Run Query
            </button>
            <button
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              onClick={() => window.print()}
              type="button"
            >
              Print
            </button>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              to="/home"
            >
              Close
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function GeneralTrackingReportPage() {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">General Tracking Report</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-slate-800">Inventory Date Range</p>
            <p className="mt-1 text-xs text-amber-800">
              Date format warning: enter dates only as MM/DD/YYYY (example: 03/02/2026).
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportDateFrom">
                  From (MM/DD/YYYY)
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="reportDateFrom"
                  inputMode="numeric"
                  name="reportDateFrom"
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$"
                  placeholder="MM/DD/YYYY"
                  title="Please use MM/DD/YYYY format."
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportDateTo">
                  To (MM/DD/YYYY)
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="reportDateTo"
                  inputMode="numeric"
                  name="reportDateTo"
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$"
                  placeholder="MM/DD/YYYY"
                  title="Please use MM/DD/YYYY format."
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportTransaction">
                Transaction
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="reportTransaction"
                name="reportTransaction"
              >
                <option disabled value="">
                  Select Transaction
                </option>
                <option value="purchase">Purchase</option>
                <option value="transfer">Transfer</option>
                <option value="repair">Repair</option>
                <option value="disposal">Disposal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportTechnician">
                Technician
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="reportTechnician"
                name="reportTechnician"
              >
                <option disabled value="">
                  Select Technician
                </option>
                <option value="tech-1">Technician 1</option>
                <option value="tech-2">Technician 2</option>
                <option value="tech-3">Technician 3</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportApproved">
                Approved?
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="reportApproved"
                name="reportApproved"
              >
                <option disabled value="">
                  Select Approval Status
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportDepartment">
                Receiving Department
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="reportDepartment"
                name="reportDepartment"
              >
                <option disabled value="">
                  Select Department
                </option>
                <option value="it">IT Services</option>
                <option value="library">Library</option>
                <option value="finance">Finance</option>
                <option value="facilities">Facilities</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportBy">
                Report By
              </label>
              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                defaultValue=""
                id="reportBy"
                name="reportBy"
              >
                <option disabled value="">
                  Select Report Type
                </option>
                <option value="invoice">Invoice Number</option>
                <option value="technician">Technician</option>
                <option value="department">Department</option>
                <option value="date">Date Range</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="reportInvoiceNumber">
                Invoice #
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="reportInvoiceNumber"
                name="reportInvoiceNumber"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              type="submit"
            >
              Report
            </button>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              to="/home"
            >
              Close
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function BarcodeSearchPage() {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Barcode Search</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="barcodeInput">
              Bar Code
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
              id="barcodeInput"
              name="barcodeInput"
              type="text"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              type="submit"
            >
              Report
            </button>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              to="/home"
            >
              Close
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function AuditReportPage() {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Audit Report</h2>

        <form className="mt-6 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="auditBuilding">
                  Building
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  defaultValue=""
                  id="auditBuilding"
                  name="auditBuilding"
                >
                  <option disabled value="">
                    Select Building
                  </option>
                  <option value="vance">Vance Academic Center</option>
                  <option value="copernicus">Copernicus Hall</option>
                  <option value="barnard">Barnard Hall</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="auditRoomNumber">
                  Room Number
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  defaultValue=""
                  id="auditRoomNumber"
                  name="auditRoomNumber"
                >
                  <option disabled value="">
                    Select Room
                  </option>
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="201">201</option>
                  <option value="202">202</option>
                </select>
              </div>

              <button
                className="h-10 rounded-lg border border-blue-600 bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                type="submit"
              >
                Report
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="excludedInvoices">
              Excluded Invoices
            </label>
            <p className="mb-3 text-xs text-amber-800">Warning: do not include any spaces.</p>
            <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
              <textarea
                className="min-h-36 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="excludedInvoices"
                name="excludedInvoices"
                placeholder="INV1001,INV1002,INV1003"
              />
              <button
                className="h-10 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                type="button"
              >
                Print List
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="purchaseOrder">
              Purchase Order
            </label>
            <p className="mb-3 text-xs text-amber-800">Warning: do not include any spaces.</p>
            <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
              <textarea
                className="min-h-36 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                id="purchaseOrder"
                name="purchaseOrder"
                placeholder="PO1001,PO1002,PO1003"
              />
              <button
                className="h-10 rounded-lg border border-blue-600 bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                type="submit"
              >
                Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function AuditRoomPage() {
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [hasReport, setHasReport] = useState(false);

  const canRunReport = building !== "" && room !== "";
  const canPrint = canRunReport && hasReport;

  const handleReport = (event) => {
    event.preventDefault();
    if (!canRunReport) {
      setHasReport(false);
      return;
    }
    setHasReport(true);
  };

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
    setHasReport(false);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
    setHasReport(false);
  };

  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-display text-3xl text-slate-800">Audit Room</h2>

        <form className="mt-6 space-y-4" onSubmit={handleReport}>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="auditRoomBuilding">
                  Building
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="auditRoomBuilding"
                  name="auditRoomBuilding"
                  onChange={handleBuildingChange}
                  value={building}
                >
                  <option value="">Select Building</option>
                  <option value="vance">Vance Academic Center</option>
                  <option value="copernicus">Copernicus Hall</option>
                  <option value="barnard">Barnard Hall</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="auditRoomNumber">
                  Room Number
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500"
                  id="auditRoomNumber"
                  name="auditRoomNumber"
                  onChange={handleRoomChange}
                  value={room}
                >
                  <option value="">Select Room</option>
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="201">201</option>
                  <option value="202">202</option>
                </select>
              </div>

              <button
                className="h-10 rounded-lg border border-blue-600 bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500"
                disabled={!canRunReport}
                type="submit"
              >
                Report
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500"
              disabled={!canPrint}
              type="button"
            >
              Print List
            </button>
          </div>

          {!canRunReport && (
            <p className="text-xs text-amber-800">Select both a building and room number to run a report.</p>
          )}
          {canRunReport && !hasReport && (
            <p className="text-xs text-amber-800">Run Report before Print List becomes available.</p>
          )}
          {canPrint && <p className="text-xs text-green-700">Report is ready. Print List is now enabled.</p>}
        </form>
      </div>
    </section>
  );
}

function FeaturePage({ title, subtitle }) {
  return (
    <section className="panel relative z-10 p-6 sm:p-10">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-blue-700">CCSU IIS Module</p>
        <h2 className="mt-3 font-display text-3xl text-slate-800">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">{subtitle}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-display text-sm uppercase tracking-[0.14em] text-blue-700">Workflow Status</p>
          <p className="mt-3 text-2xl font-semibold text-slate-800">Ready for integration</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-display text-sm uppercase tracking-[0.14em] text-blue-700">Data Scope</p>
          <p className="mt-3 text-2xl font-semibold text-slate-800">CCSU inventory records</p>
        </div>
      </div>
    </section>
  );
}

function AppShell() {
  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    const onBodyClick = () => setOpenMenu("");
    window.addEventListener("click", onBodyClick);
    return () => window.removeEventListener("click", onBodyClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 text-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
        <nav className="panel relative z-50 flex flex-wrap items-center gap-3 p-4">
          <Link className="menu-button border-blue-300 bg-blue-600 text-white hover:border-blue-600 hover:bg-blue-700 hover:text-white" to="/home">
            Home
          </Link>
          {navConfig.map((item) => (
            <div key={item.label} onClick={(event) => event.stopPropagation()}>
              <DropdownMenu
                actions={item.actions}
                closeMenu={() => setOpenMenu("")}
                isOpen={openMenu === item.label}
                label={item.label}
                onToggle={() => setOpenMenu((current) => (current === item.label ? "" : item.label))}
              />
            </div>
          ))}
        </nav>

        <Routes>
          <Route element={<HomePage />} path="/home" />
          <Route element={<CreateInvoicePage />} path="/invoice/create" />
          <Route
            element={<UpdateInvoicePage />}
            path="/invoice/update"
          />
          <Route
            element={<QueryInvoicePage />}
            path="/invoice/query"
          />
          <Route
            element={<GeneralTrackingReportPage />}
            path="/reports/general-tracking"
          />
          <Route
            element={<BarcodeSearchPage />}
            path="/reports/barcode-search"
          />
          <Route
            element={<AuditReportPage />}
            path="/reports/audit-report"
          />
          <Route
            element={<AuditRoomPage />}
            path="/reports/audit-room"
          />
          <Route
            element={<FeaturePage subtitle="Review pending invoices and authorize approved entries for inventory updates." title="Approve Invoice" />}
            path="/admin/approve-invoice"
          />
          <Route
            element={<FeaturePage subtitle="Administer technician profiles, permissions, and assignment coverage." title="Manage Technicians" />}
            path="/admin/manage-technicians"
          />
          <Route
            element={<FeaturePage subtitle="Manage department definitions used for asset ownership and reporting." title="Manage Department" />}
            path="/admin/manage-department"
          />
          <Route element={<Navigate replace to="/home" />} path="*" />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
