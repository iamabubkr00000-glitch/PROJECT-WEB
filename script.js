// Scholarship names and official information pages
const scholarships = [
  {
    name: "PM-USP Central Sector Scheme of Scholarship for College and University Students",
    category: "merit",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "PM-USP Special Scholarship Scheme for Jammu Kashmir and Ladakh",
    category: "special",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "AICTE Pragati Scholarship Scheme",
    category: "special",
    link: "https://www.aicte-india.org/"
  },
  {
    name: "AICTE Saksham Scholarship Scheme",
    category: "special",
    link: "https://www.aicte-india.org/"
  },
  {
    name: "AICTE Swanath Scholarship Scheme",
    category: "need",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "Central Sector Scholarship of Top Class Education for SC Students",
    category: "need",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "Reliance Foundation Undergraduate Scholarships",
    category: "merit",
    link: "https://scholarships.reliancefoundation.org/UG_Scholarship.aspx"
  },
  {
    name: "HDFC Bank Parivartan's ECSS Programme for Undergraduate Courses",
    category: "need",
    link: "https://www.hdfcbankecss.com/"
  }
];

const scholarshipList = document.getElementById("scholarshipList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");

function displayScholarships() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredScholarships = scholarships.filter(function(scholarship) {
    const matchesName = scholarship.name.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === "all" ||
                            scholarship.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  scholarshipList.innerHTML = "";

  filteredScholarships.forEach(function(scholarship) {
    const card = document.createElement("div");
    card.className = "scholarship-card";
    card.innerHTML = `
      <div class="card-icon">🎓</div>
      <h3>${scholarship.name}</h3>
      <span class="tag">${getCategoryName(scholarship.category)}</span>
      <a href="${scholarship.link}" target="_blank" rel="noopener">Official website ↗</a>
    `;
    scholarshipList.appendChild(card);
  });

  resultCount.textContent = filteredScholarships.length + " scholarships";
  emptyMessage.style.display = filteredScholarships.length === 0 ? "block" : "none";
}

function getCategoryName(category) {
  if (category === "merit") return "Merit based";
  if (category === "need") return "Need based";
  return "Special category";
}

searchInput.addEventListener("input", displayScholarships);
categoryFilter.addEventListener("change", displayScholarships);

// Show all scholarships when the page first opens
displayScholarships();