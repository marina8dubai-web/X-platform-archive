const data = [
    { ref: "P15", url: "https://x.com/Marina23376051/status/1601527315808530433", note: "" },
    { ref: "P19", url: "https://x.com/Marina23376051/status/1614204261662859266", note: "" },
    { ref: "P71-2", url: "https://x.com/i/chat/798153669191626752-1251430245292523521", note: "" },
    { ref: "P75-6", url: "https://x.com/Marina23376051/status/1639335145634136085", note: "" },
    { ref: "P79", url: "https://x.com/Mahdi34860988", note: "" },
    { ref: "P81", url: "https://x.com/Frenciemahdi22", note: "" },
    { ref: "P153", url: "https://x.com/Marina23376051/status/1659295393664888861", note: "" },
    { ref: "P159", url: "https://x.com/Marina23376051/status/1798415687825989890", note: "" },
    { ref: "P160", url: "https://x.com/Marina23376051/status/1798047062405403015", note: "" },
    { ref: "P161", url: "https://x.com/Marina23376051/status/1796043567053365378", note: "" },
    { ref: "P162", url: "https://x.com/Marina23376051/status/1794724229713416250", note: "" },
    { ref: "P163", url: "https://x.com/Marina23376051/status/1793648898000736764", note: "" },
    { ref: "P164", url: "https://x.com/Marina23376051/status/1658789109278679041", note: "" },
    { ref: "P165", url: "https://x.com/Marina23376051/status/1791096161979302020", note: "" },
    { ref: "P166", url: "https://x.com/Marina23376051/status/1786346402575991053", note: "" },
    { ref: "P167", url: "https://x.com/Marina23376051/status/1780995563896426670", note: "" },
    { ref: "P168", url: "https://x.com/Marina23376051/status/1770796855670051171", note: "" },
    { ref: "P169", url: "https://x.com/Marina23376051/status/1767705243972743640", note: "" },
    { ref: "P170", url: "https://x.com/Marina23376051/status/1764934249415630863", note: "" },
    { ref: "P171", url: "https://x.com/Marina23376051/status/1760777439607767218", note: "" },
    { ref: "P172", url: "https://x.com/Marina23376051/status/1759478840848531787", note: "" },
    { ref: "P173", url: "https://x.com/Marina23376051/status/1755161086486081846", note: "" },
    { ref: "P174", url: "https://x.com/Marina23376051/status/1747656923132965018", note: "" },
    { ref: "P175", url: "https://x.com/Marina23376051/status/1711969244785598567", note: "" },
    { ref: "P176", url: "https://x.com/Marina23376051/status/1711452125430010216", note: "" },
    { ref: "P177", url: "https://x.com/Marina23376051/status/1711434001880150139", note: "" },
    { ref: "P178", url: "https://x.com/Marina23376051/status/1711425905392796116", note: "" },
    { ref: "P179", url: "https://x.com/Marina23376051/status/1711260001359032745", note: "" },
    { ref: "P180", url: "https://x.com/Marina23376051/status/1710566772854722777", note: "" },
    { ref: "P181", url: "https://x.com/Marina23376051/status/1710215905710424413", note: "" },
    { ref: "P182", url: "https://x.com/Marina23376051/status/1709632900910534823", note: "" },
    { ref: "P183", url: "https://x.com/Marina23376051/status/1709541379850863052", note: "" },
    { ref: "P184", url: "https://x.com/Marina23376051/status/1707860871467110764", note: "" },
    { ref: "P185", url: "https://x.com/Marina23376051/status/1706750827333898347", note: "" },
    { ref: "P329", url: "https://x.com/Marina23376051/status/1552398243006488578", note: "" },
    { ref: "P329", url: "https://x.com/Marina23376051/status/1568109457929822208", note: "User self-liquidated" },
    { ref: "P341", url: "https://x.com/Marina23376051/status/1633098519077584896", note: "User self-liquidated" },
    { ref: "P407", url: "https://x.com/Marina23376051/status/1553686385646833664", note: "User self-liquidated" },
    // NEW LINKS
    { ref: "P409", url: "https://x.com/Marina23376051/status/1553686385646833664", note: "" },
    { ref: "P411", url: "https://x.com/Marina23376051/status/1587049967776108545", note: "" },
    { ref: "P415", url: "https://x.com/Marina23376051/status/1755161086486081846", note: "" },
    { ref: "P419", url: "https://x.com/Marina23376051/status/1681764995414073346", note: "" },
    { ref: "P423", url: "https://x.com/Marina23376051/status/1581349034434138115", note: "" },
    { ref: "P425", url: "https://x.com/Marina23376051/status/1582478093142306816", note: "" },
    { ref: "P425", url: "https://x.com/Marina23376051/status/1587011729984262144", note: "" },
    { ref: "P425", url: "https://x.com/Marina23376051/status/1592822575973158913", note: "" }
];

function renderTable(items) {
    const tbody = document.getElementById('tableBody');
    const noResults = document.getElementById('noResults');
    const stats = document.getElementById('statsCount');
    
    stats.innerText = items.length;

    if (items.length === 0) {
        tbody.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    tbody.innerHTML = items.map(item => `
        <tr class="hover:bg-blue-50 transition-colors group">
            <td class="p-4 text-center">
                <span class="inline-block px-3 py-1 bg-white border border-slate-200 text-slate-800 font-bold rounded shadow-sm text-xs">
                    ${item.ref}
                </span>
            </td>
            <td class="p-4">
                <a href="${item.url}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium break-all flex items-center gap-2">
                    <span>${item.url}</span>
                    <svg class="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            </td>
            <td class="p-4">
                ${item.note ? `<span class="status-badge">${item.note}</span>` : '<span class="text-slate-300 italic">No notes</span>'}
            </td>
        </tr>
    `).join('');
}

// Search Logic
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = data.filter(item => 
        item.ref.toLowerCase().includes(term) || 
        item.url.toLowerCase().includes(term) ||
        item.note.toLowerCase().includes(term)
    );
    renderTable(filtered);
});

// Clear Logic
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    renderTable(data);
});

// Export Logic
document.getElementById('exportBtn').addEventListener('click', () => {
    const text = data.map(i => `${i.ref}, ${i.url}, ${i.note}`).join('\n');
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const btn = document.getElementById('exportBtn');
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.style.backgroundColor = "#16a34a"; // green
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "#2563eb"; // blue
    }, 2000);
});

// Init
window.onload = () => renderTable(data);