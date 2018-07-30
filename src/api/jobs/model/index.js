const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    jobId: { type: String },
    location: { type: String },
    source: { type: String },
    hasApplied: { type: Boolean, default: true },
    applied: { type: Date, default: Date.now },
    notes: { type: String },
    url: { type: String },
    interview: { type: Date },
    offer: { type: Date },
    rejected: { type: Date },
    archive: { type: Date },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(`Job`, JobSchema);
