// Add these variables at the beginning of the file
let uploadedImage = null;
let mainUploadedImage = null;

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = e.target.result;
            displayUploadedImage();
            document.getElementById('removeImage').style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
}

function displayUploadedImage() {
    const currentImage = document.getElementById('currentImage');
    currentImage.innerHTML = `
        <img src="${uploadedImage}" alt="Uploaded image" class="img-fluid rounded" style="max-height: 200px;">
    `;
}

function removeUploadedImage() {
    uploadedImage = null;
    document.getElementById('currentImage').innerHTML = '';
    document.getElementById('removeImage').style.display = 'none';
    document.getElementById('imageUpload').value = '';
}

function handleMainImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            mainUploadedImage = e.target.result;
            displayMainImage();
            document.getElementById('mainImageRemove').style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
}

function displayMainImage() {
    const preview = document.getElementById('mainImagePreview');
    preview.innerHTML = `
        <img src="${mainUploadedImage}" alt="Patient photo" class="img-fluid rounded">
    `;
}

function removeMainImage() {
    mainUploadedImage = null;
    const preview = document.getElementById('mainImagePreview');
    preview.innerHTML = `
        <img src="assets/images/hair-loss-types/placeholder.svg" alt="Upload preview" class="img-fluid">
    `;
    document.getElementById('mainImageRemove').style.display = 'none';
    document.getElementById('mainImageUpload').value = '';
}

// Add event listener for image upload
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
    document.getElementById('mainImageUpload').addEventListener('change', handleMainImageUpload);
});

// Initialize progress bar
function updateProgress(step) {
    const progressBar = document.querySelector('.progress-bar');
    const width = step * 25;
    progressBar.style.width = `${width}%`;
    
    if (width === 100) {
        progressBar.classList.add('completed');
        showToast('Diagnosis complete!');
    } else {
        progressBar.classList.remove('completed');
    }
}

// Add this at the beginning of the file
function createImageFallback(hairType) {
    const container = document.createElement('div');
    container.className = 'hair-type-image-fallback';
    container.style.width = '300px';
    container.style.height = '200px';
    container.style.backgroundColor = '#f8f9fa';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.borderRadius = '8px';
    container.style.marginBottom = '1rem';
    container.style.border = '1px solid #dee2e6';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    // Add gradient overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'linear-gradient(45deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1))';
    container.appendChild(overlay);

    const text = document.createElement('span');
    text.textContent = hairLossData.types[hairType].name;
    text.style.color = '#6c757d';
    text.style.fontFamily = 'Inter, sans-serif';
    text.style.fontSize = '16px';
    text.style.fontWeight = '500';
    text.style.zIndex = '1';

    container.appendChild(text);
    return container;
}

// Update symptoms list when hair type changes
document.getElementById('hairType').addEventListener('change', function() {
    const type = this.value;
    const symptomsList = document.getElementById('symptomsList');
    symptomsList.innerHTML = '';

    if (type && hairLossData.types[type]) {
        // Add image preview with loading state
        const imagePreview = document.createElement('div');
        imagePreview.className = 'hair-loss-image mb-3';
        imagePreview.innerHTML = `
            <div class="image-container">
                <div class="loading-spinner" id="imageLoading">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <img src="${uploadedImage || hairLossData.types[type].image}" 
                     alt="${hairLossData.types[type].name}" 
                     class="img-fluid rounded"
                     onload="this.parentElement.querySelector('.loading-spinner').style.display='none'"
                     onerror="this.onerror=null; this.src='assets/images/hair-loss-types/placeholder.svg'">
            </div>
            <div class="image-caption text-center mt-2">
                <small class="text-muted">${hairLossData.types[type].name}</small>
            </div>
        `;
        symptomsList.appendChild(imagePreview);

        // Add predefined symptoms
        hairLossData.types[type].symptoms.forEach(symptom => {
            addSymptomCheckbox(symptom, true);
        });

        // Add custom symptom input
        const customSymptomDiv = document.createElement('div');
        customSymptomDiv.className = 'custom-symptom mt-3';
        customSymptomDiv.innerHTML = `
            <div class="input-group">
                <input type="text" class="form-control" id="customSymptom" placeholder="Add custom symptom">
                <button class="btn btn-outline-primary" type="button" onclick="addCustomSymptom()">
                    <i class="fas fa-plus"></i> Add
                </button>
            </div>
        `;
        symptomsList.appendChild(customSymptomDiv);
    }
});

function addSymptomCheckbox(symptom, isPredefined = false) {
    const symptomsList = document.getElementById('symptomsList');
    const div = document.createElement('div');
    div.className = 'form-check symptom-item';
    div.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${symptom}" 
               id="symptom${symptom.replace(/\s+/g, '')}" ${isPredefined ? 'checked' : ''}>
        <label class="form-check-label" for="symptom${symptom.replace(/\s+/g, '')}">
            ${symptom}
        </label>
        ${!isPredefined ? `
            <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeSymptom(this)">
                <i class="fas fa-times"></i>
            </button>
        ` : ''}
    `;
    symptomsList.insertBefore(div, symptomsList.lastElementChild);
}

function addCustomSymptom() {
    const customSymptomInput = document.getElementById('customSymptom');
    const symptom = customSymptomInput.value.trim();
    
    if (symptom) {
        addSymptomCheckbox(symptom, false);
        customSymptomInput.value = '';
    }
}

function removeSymptom(button) {
    button.closest('.symptom-item').remove();
}

function getSelectedSymptoms() {
    const symptoms = [];
    document.querySelectorAll('.symptom-item input[type="checkbox"]:checked').forEach(checkbox => {
        symptoms.push(checkbox.value);
    });
    return symptoms;
}

function generateDiagnosis() {
    const patientName = document.getElementById('patientName').value;
    const hairType = document.getElementById('hairType').value;
    const duration = document.getElementById('duration').value;
    const selectedSymptoms = getSelectedSymptoms();

    if (!patientName || !hairType) {
        showToast('Please fill in all required fields');
        return;
    }

    const typeData = hairLossData.types[hairType];
    const trichoData = hairLossData.trichoTest.geneticMarkers[hairType];
    const diagnosisOutput = document.getElementById('diagnosisOutput');
    
    // Clear previous content
    diagnosisOutput.innerHTML = '';
    
    // Use uploaded image if available, otherwise use default
    const imageSource = uploadedImage || typeData.image;
    const imageHtml = `
        <div class="hair-loss-image mb-3">
            <img src="${imageSource}" alt="${typeData.name}" class="img-fluid rounded">
            <div class="image-caption text-center mt-2">
                <small class="text-muted">${typeData.name}</small>
            </div>
        </div>
    `;
    diagnosisOutput.innerHTML = imageHtml;

    // Add main image if available
    if (mainUploadedImage) {
        diagnosisOutput.innerHTML = `
            <div class="patient-photo mb-4">
                <h5>Patient Photo</h5>
                <img src="${mainUploadedImage}" alt="Patient photo" class="img-fluid rounded" style="max-height: 300px;">
            </div>
        ` + diagnosisOutput.innerHTML;
    }

    diagnosisOutput.innerHTML = `
        <div class="treatment-card">
            <h5>Diagnosis Summary</h5>
            <div class="row">
                <div class="col-md-12">
                    <p><strong>Patient:</strong> ${patientName}</p>
                    <p><strong>Condition:</strong> ${typeData.name}</p>
                    <p><strong>Duration:</strong> ${duration}</p>
                    <p><strong>Description:</strong> ${typeData.description}</p>
                </div>
            </div>

            <!-- Classification Section -->
            ${typeData.classification ? `
                <div class="classification-section mt-4">
                    <h6>Classification Systems</h6>
                    <div class="row">
                        ${Object.entries(typeData.classification).map(([key, system]) => `
                            <div class="col-md-6 mb-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h6>${system.name}</h6>
                                    </div>
                                    <div class="card-body">
                                        <p>${system.description}</p>
                                        ${system.stages ? `
                                            <div class="stages">
                                                ${system.stages.map(stage => 
                                                    `<span class="badge bg-secondary me-2 mb-2">${stage}</span>`
                                                ).join('')}
                                            </div>
                                        ` : ''}
                                        ${system.types ? `
                                            <div class="types mt-2">
                                                ${Object.entries(system.types).map(([typeKey, values]) => `
                                                    <div class="mb-2">
                                                        <strong>${typeKey.charAt(0).toUpperCase() + typeKey.slice(1)}:</strong>
                                                        ${values.map(value => 
                                                            `<span class="badge bg-info me-2 mb-1">${value}</span>`
                                                        ).join('')}
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Trichoscopy Findings -->
            ${hairLossData.trichoTest.trichoscopyFindings ? `
                <div class="trichoscopy-section mt-4">
                    <h6>Trichoscopy Findings</h6>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h6>General Findings</h6>
                                </div>
                                <div class="card-body">
                                    ${Object.entries(hairLossData.trichoTest.trichoscopyFindings.general).map(([category, findings]) => `
                                        <div class="mb-3">
                                            <strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                                            <ul class="list-unstyled ms-3">
                                                ${findings.map(finding => `
                                                    <li><i class="fas fa-circle me-2 text-secondary"></i>${finding}</li>
                                                `).join('')}
                                            </ul>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h6>Disease-Specific Findings</h6>
                                </div>
                                <div class="card-body">
                                    ${hairLossData.trichoTest.trichoscopyFindings.diseaseSpecific[hairType] ? `
                                        <ul class="list-unstyled">
                                            ${hairLossData.trichoTest.trichoscopyFindings.diseaseSpecific[hairType].map(finding => `
                                                <li><i class="fas fa-check me-2 text-success"></i>${finding}</li>
                                            `).join('')}
                                        </ul>
                                    ` : '<p>No specific findings available for this condition.</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Hair Cycle Section -->
            <div class="hair-cycle-section mt-4">
                <h6>Hair Growth Cycle</h6>
                <div class="row">
                    ${Object.entries(hairLossData.hairCycle).map(([phase, data]) => `
                        <div class="col-md-4">
                            <div class="phase-card">
                                <h6>${data.name}</h6>
                                <div class="phase-image mb-2">
                                    ${data.image ? `<img src="${data.image}" alt="${data.name}" class="img-fluid">` : ''}
                                </div>
                                <p><small>${data.description}</small></p>
                                <p><strong>Duration:</strong> ${data.duration}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Clinical Findings Section -->
            ${typeData.clinicalImages ? `
                <div class="clinical-section mt-4">
                    <h6>Clinical Findings</h6>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="finding-card">
                                <h6>Microscopic Findings</h6>
                                <p>${typeData.clinicalImages.microscopic}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="finding-card">
                                <h6>Macroscopic Findings</h6>
                                <p>${typeData.clinicalImages.macroscopic}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Symptoms Section -->
            <div class="symptoms-section mt-4">
                <h6>Symptoms</h6>
                <ul class="symptom-list">
                    ${selectedSymptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
            </div>

            <!-- Treatment Recommendations -->
            ${trichoData ? `
                <div class="treatment-card mt-4">
                    <h5>Treatment Recommendations</h5>
                    <div class="row">
                        ${Object.entries(typeData.treatments).map(([category, treatments]) => `
                            <div class="col-md-6 mb-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h6>${category.charAt(0).toUpperCase() + category.slice(1)} Treatments</h6>
                                    </div>
                                    <div class="card-body">
                                        ${treatments.map(treatment => `
                                            <div class="treatment-item mb-3">
                                                <strong>${treatment.name}</strong>
                                                ${treatment.dosage ? `<p class="mb-1">Dosage: ${treatment.dosage}</p>` : ''}
                                                ${treatment.duration ? `<p class="mb-1">Duration: ${treatment.duration}</p>` : ''}
                                                ${treatment.frequency ? `<p class="mb-1">Frequency: ${treatment.frequency}</p>` : ''}
                                                ${treatment.notes ? `<p class="mb-1 text-muted"><small>${treatment.notes}</small></p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    document.getElementById('outputSection').style.display = 'block';
    updateProgress(1);
    addToRecentActivity('Generated diagnosis for ' + patientName);
    updateTimeline('Diagnosis Generated');
}

function generatePrescription() {
    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('patientAge').value;
    const hairType = document.getElementById('hairType').value;
    const duration = document.getElementById('duration').value;
    const prescriptionOutput = document.getElementById('prescriptionOutput');
    
    if (!hairType) {
        showToast('Please select a hair loss type first');
        return;
    }

    const typeData = hairLossData.types[hairType];
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Generate HTML content
    const prescriptionContent = `
        <div class="prescription-section">
            <div class="prescription-header mb-4">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h4 class="mb-3">Medical Prescription</h4>
                        <p class="mb-1"><strong>Patient Name:</strong> ${patientName}</p>
                        <p class="mb-1"><strong>Age:</strong> ${patientAge}</p>
                        <p class="mb-1"><strong>Diagnosis:</strong> ${typeData.name}</p>
                        <p class="mb-1"><strong>Duration:</strong> ${duration}</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p class="mb-1"><strong>Date:</strong> ${currentDate}</p>
                        <p class="mb-1"><strong>Rx #:</strong> ${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                </div>
                <hr class="my-4">
            </div>

            <div class="prescription-body">
                ${Object.entries(typeData.treatments).map(([category, treatments]) => `
                    <div class="treatment-category mb-4">
                        <h5 class="mb-3">${category.charAt(0).toUpperCase() + category.slice(1)} Treatments</h5>
                        <div class="row">
                            ${treatments.map(treatment => `
                                <div class="col-md-6 mb-3">
                                    <div class="treatment-item">
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="fas fa-prescription me-2"></i>
                                            <h6 class="mb-0">${treatment.name}</h6>
                                        </div>
                                        ${treatment.dosage ? `
                                            <div class="treatment-detail">
                                                <i class="fas fa-pills me-2 text-primary"></i>
                                                <span>Dosage: ${treatment.dosage}</span>
                                            </div>
                                        ` : ''}
                                        ${treatment.frequency ? `
                                            <div class="treatment-detail">
                                                <i class="fas fa-clock me-2 text-info"></i>
                                                <span>Frequency: ${treatment.frequency}</span>
                                            </div>
                                        ` : ''}
                                        ${treatment.duration ? `
                                            <div class="treatment-detail">
                                                <i class="fas fa-calendar-alt me-2 text-success"></i>
                                                <span>Duration: ${treatment.duration}</span>
                                            </div>
                                        ` : ''}
                                        ${treatment.notes ? `
                                            <div class="treatment-detail text-muted mt-2">
                                                <i class="fas fa-info-circle me-2"></i>
                                                <small>${treatment.notes}</small>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
                
                <div class="prescription-footer mt-4 pt-4 border-top">
                    <div class="row">
                        <div class="col-md-8">
                            <h6>Special Instructions:</h6>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check-circle me-2 text-success"></i>Take medications as prescribed</li>
                                <li><i class="fas fa-check-circle me-2 text-success"></i>Report any adverse effects immediately</li>
                                <li><i class="fas fa-check-circle me-2 text-success"></i>Schedule follow-up in 4-6 weeks</li>
                            </ul>
                        </div>
                        <div class="col-md-4 text-end">
                            <div class="signature-area mt-3">
                                <div class="signature-line"></div>
                                <p class="mb-0"><small>Doctor's Signature</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    prescriptionOutput.innerHTML = prescriptionContent;

    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.text('Medical Prescription', 20, 20);
    
    // Add patient info
    doc.setFontSize(12);
    doc.text(`Patient Name: ${patientName}`, 20, 40);
    doc.text(`Age: ${patientAge}`, 20, 50);
    doc.text(`Date: ${currentDate}`, 20, 60);
    doc.text(`Diagnosis: ${typeData.name}`, 20, 70);
    doc.text(`Duration: ${duration}`, 20, 80);
    
    let yPos = 100;
    
    // Add treatments
    Object.entries(typeData.treatments).forEach(([category, treatments]) => {
        // Add category header
        doc.setFontSize(14);
        doc.text(`${category.charAt(0).toUpperCase() + category.slice(1)} Treatments:`, 20, yPos);
        yPos += 10;
        
        // Add treatments
        doc.setFontSize(12);
        treatments.forEach(treatment => {
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.text(`• ${treatment.name}`, 30, yPos);
            yPos += 10;
            
            if (treatment.dosage) {
                doc.text(`  Dosage: ${treatment.dosage}`, 35, yPos);
                yPos += 10;
            }
            if (treatment.frequency) {
                doc.text(`  Frequency: ${treatment.frequency}`, 35, yPos);
                yPos += 10;
            }
            if (treatment.duration) {
                doc.text(`  Duration: ${treatment.duration}`, 35, yPos);
                yPos += 10;
            }
            if (treatment.notes) {
                doc.text(`  Notes: ${treatment.notes}`, 35, yPos);
                yPos += 10;
            }
            
            yPos += 5;
        });
        yPos += 10;
    });
    
    // Add footer
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    doc.setFontSize(10);
    doc.text('Special Instructions:', 20, yPos);
    yPos += 10;
    doc.text('- Take medications as prescribed', 25, yPos);
    yPos += 10;
    doc.text('- Report any adverse effects immediately', 25, yPos);
    yPos += 10;
    doc.text('- Schedule follow-up in 4-6 weeks', 25, yPos);
    yPos += 20;
    
    // Add signature line
    doc.line(120, yPos, 180, yPos);
    doc.text("Doctor's Signature", 135, yPos + 10);
    
    // Save the PDF
    doc.save('prescription.pdf');

    // Show the output section and update progress
    document.getElementById('outputSection').style.display = 'block';
    updateProgress(2);
    addToRecentActivity('Generated prescription for ' + patientName);
    updateTimeline('Prescription Generated');
    showToast('Prescription PDF generated successfully');
}

function generateLabRecommendations() {
    const patientName = document.getElementById('patientName').value;
    const hairType = document.getElementById('hairType').value;
    const labsOutput = document.getElementById('labsOutput');
    
    if (!hairType) {
        showToast('Please select a hair loss type first');
        return;
    }

    const typeData = hairLossData.types[hairType];
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Generate HTML content
    const labContent = `
        <div class="lab-recommendations">
            <div class="lab-header mb-4">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h4 class="mb-3">Laboratory Test Recommendations</h4>
                        <p class="mb-1"><strong>Patient:</strong> ${patientName}</p>
                        <p class="mb-1"><strong>Condition:</strong> ${typeData.name}</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p class="mb-1"><strong>Date:</strong> ${currentDate}</p>
                        <p class="mb-1"><strong>Ref #:</strong> ${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                </div>
                <hr class="my-4">
            </div>

            <div class="lab-body">
                ${Object.entries(hairLossData.labTests).map(([category, tests]) => `
                    <div class="lab-category mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <i class="fas fa-flask me-2"></i>
                                    ${category.charAt(0).toUpperCase() + category.slice(1)} Tests
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    ${tests.map(test => `
                                        <div class="col-md-6 mb-3">
                                            <div class="lab-test-item">
                                                <div class="d-flex align-items-center">
                                                    <i class="fas fa-vial me-2 text-primary"></i>
                                                    <span>${test}</span>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="lab-footer mt-4 pt-4 border-top">
                <div class="row">
                    <div class="col-md-8">
                        <h6>Important Notes:</h6>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-info-circle me-2 text-info"></i>Fast for 8-12 hours before blood tests</li>
                            <li><i class="fas fa-info-circle me-2 text-info"></i>Bring previous test results if available</li>
                            <li><i class="fas fa-info-circle me-2 text-info"></i>Schedule tests within 2 weeks</li>
                        </ul>
                    </div>
                    <div class="col-md-4 text-end">
                        <div class="signature-area mt-3">
                            <div class="signature-line"></div>
                            <p class="mb-0"><small>Doctor's Signature</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    labsOutput.innerHTML = labContent;

    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.text('Laboratory Test Recommendations', 20, 20);
    
    // Add patient info
    doc.setFontSize(12);
    doc.text(`Patient Name: ${patientName}`, 20, 40);
    doc.text(`Date: ${currentDate}`, 20, 50);
    doc.text(`Condition: ${typeData.name}`, 20, 60);
    
    let yPos = 80;
    
    // Add lab tests
    Object.entries(hairLossData.labTests).forEach(([category, tests]) => {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        // Add category header
        doc.setFontSize(14);
        doc.text(`${category.charAt(0).toUpperCase() + category.slice(1)} Tests:`, 20, yPos);
        yPos += 10;
        
        // Add tests
        doc.setFontSize(12);
        tests.forEach(test => {
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            doc.text(`• ${test}`, 30, yPos);
            yPos += 10;
        });
        yPos += 10;
    });
    
    // Add notes
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }
    doc.setFontSize(10);
    doc.text('Important Notes:', 20, yPos);
    yPos += 10;
    doc.text('- Fast for 8-12 hours before blood tests', 25, yPos);
    yPos += 10;
    doc.text('- Bring previous test results if available', 25, yPos);
    yPos += 10;
    doc.text('- Schedule tests within 2 weeks', 25, yPos);
    yPos += 20;
    
    // Add signature line
    doc.line(120, yPos, 180, yPos);
    doc.text("Doctor's Signature", 135, yPos + 10);
    
    // Save the PDF
    doc.save('lab_recommendations.pdf');

    // Show the output section and update progress
    document.getElementById('outputSection').style.display = 'block';
    updateProgress(3);
    addToRecentActivity('Generated lab recommendations for ' + patientName);
    updateTimeline('Lab Tests Recommended');
    showToast('Lab recommendations PDF generated successfully');
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(20);
    doc.text('Hair Care Diagnostic Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Patient: ${document.getElementById('patientName').value}`, 20, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    
    const hairType = document.getElementById('hairType').value;
    const typeData = hairLossData.types[hairType];
    
    // Add diagnosis
    doc.setFontSize(14);
    doc.text('Diagnosis', 20, 70);
    doc.setFontSize(12);
    doc.text(`Condition: ${typeData.name}`, 20, 80);
    doc.text(`Description: ${typeData.description}`, 20, 90);
    
    // Add treatment plan
    doc.setFontSize(14);
    doc.text('Treatment Plan', 20, 110);
    doc.setFontSize(12);
    
    let yPos = 120;
    Object.entries(typeData.treatments).forEach(([type, treatments]) => {
        doc.text(`${type.charAt(0).toUpperCase() + type.slice(1)} Treatments:`, 20, yPos);
        yPos += 10;
        treatments.forEach(treatment => {
            doc.text(`- ${treatment.name}`, 30, yPos);
            yPos += 10;
            doc.text(`  Dosage: ${treatment.dosage}`, 40, yPos);
            yPos += 10;
            doc.text(`  Duration: ${treatment.duration || 'As prescribed'}`, 40, yPos);
            yPos += 10;
        });
    });
    
    // Add prevention recommendations
    doc.setFontSize(14);
    doc.text('Prevention Recommendations', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    hairLossData.prevention.general.forEach(item => {
        doc.text(`- ${item}`, 30, yPos);
        yPos += 10;
    });
    
    // Save PDF
    doc.save('hair-care-diagnostic-report.pdf');
    
    updateProgress(4);
    addToRecentActivity('Generated PDF report');
    updateTimeline('PDF Report Generated');
    showToast('PDF report generated successfully');
}

// Theme handling
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.btn-outline-light i');
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.btn-outline-light i').className = 'fas fa-sun';
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Form handling
function resetForm() {
    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
        document.getElementById('diagnosticForm').reset();
        document.getElementById('symptomsList').innerHTML = '';
        updateProgress(0);
    }
}

function saveAsDraft() {
    const formData = {
        patientName: document.getElementById('patientName').value,
        patientAge: document.getElementById('patientAge').value,
        hairType: document.getElementById('hairType').value,
        duration: document.getElementById('duration').value,
        symptoms: getSelectedSymptoms()
    };
    
    localStorage.setItem('formDraft', JSON.stringify(formData));
    addToRecentActivity('Form saved as draft');
    showToast('Draft saved successfully');
}

// Recent activity handling
function addToRecentActivity(activity) {
    const activityList = document.getElementById('recentActivity');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    const activityItem = document.createElement('a');
    activityItem.href = '#';
    activityItem.className = 'list-group-item list-group-item-action';
    activityItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <p class="mb-1">${activity}</p>
            <small class="text-muted">${timeString}</small>
        </div>
    `;
    
    activityList.insertBefore(activityItem, activityList.firstChild);
    
    // Keep only last 5 activities
    while (activityList.children.length > 5) {
        activityList.removeChild(activityList.lastChild);
    }
}

// Toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }, 100);
}

// Form validation
document.getElementById('diagnosticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
        showToast('Please fill in all required fields');
    }
    this.classList.add('was-validated');
});

// Timeline handling
function updateTimeline(action) {
    const timeline = document.querySelector('.timeline');
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    const now = new Date();
    timelineItem.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3>${action}</h3>
            <p>${now.toLocaleString()}</p>
        </div>
    `;
    
    timeline.insertBefore(timelineItem, timeline.firstChild);
} 