document.addEventListener('DOMContentLoaded', () => {
  // Add hover effect to task items
  const taskItems = document.querySelectorAll('.task-item');
  
  taskItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });
  
  // Add animation to the task form
  const taskForm = document.querySelector('.task-form');
  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      const input = taskForm.querySelector('input[name="title"]');
      if (input.value.trim()) {
        // Add a flash effect to the form
        taskForm.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
        setTimeout(() => {
          taskForm.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }, 300);
      }
    });
  }
  
  // Add confirmation for delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (!confirm('Are you sure you want to delete this task?')) {
        e.preventDefault();
      }
    });
  });
  
  // Add a visual feedback when clicking buttons
  const allButtons = document.querySelectorAll('.btn');
  allButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = '';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
});