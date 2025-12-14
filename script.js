document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const allGrids = document.querySelectorAll('.exercise-grid');

    // Function to hide all exercise grids and remove the 'active' class from buttons
    const hideAllExercises = () => {
        allGrids.forEach(grid => {
            grid.classList.add('hidden');
        });
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const targetGridId = category + '-exercises';
            const targetGrid = document.getElementById(targetGridId);
            
            // 1. Check if the clicked button's content is ALREADY visible
            const isActive = targetGrid && !targetGrid.classList.contains('hidden');

            // --- MAIN LOGIC ---

            // First, hide everything
            hideAllExercises();

            // 2. If it WASN'T active, show its content and mark the button as active
            if (!isActive) {
                if (targetGrid) {
                    targetGrid.classList.remove('hidden');
                }
                button.classList.add('active');
            }
            
            // If it WAS active, hideAllExercises() has already done the job, resulting in the desired toggle-off effect.
        });
    });
});